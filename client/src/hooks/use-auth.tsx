import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { apiRequest } from "@/lib/queryClient";
import { User, UserLogin, UserRegister } from "@shared/schema";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (userData: UserRegister) => Promise<User>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<User | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    checkAuth()
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const checkAuth = async (): Promise<User | null> => {
    try {
      const res = await apiRequest("GET", "/api/auth/session");
      const data = await res.json();
      
      if (data.user) {
        setUser(data.user);
        return data.user;
      }
      return null;
    } catch (error) {
      console.error("Auth check failed:", error);
      return null;
    }
  };

  const login = async (email: string, password: string): Promise<User> => {
    const loginData: UserLogin = { email, password };
    
    try {
      const res = await apiRequest("POST", "/api/auth/login", loginData);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }
      
      const user = await res.json();
      setUser(user);
      return user;
    } catch (error: any) {
      throw new Error(error.message || "Login failed");
    }
  };

  const register = async (userData: UserRegister): Promise<User> => {
    try {
      const res = await apiRequest("POST", "/api/auth/register", userData);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }
      
      const user = await res.json();
      setUser(user);
      return user;
    } catch (error: any) {
      throw new Error(error.message || "Registration failed");
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await apiRequest("POST", "/api/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
