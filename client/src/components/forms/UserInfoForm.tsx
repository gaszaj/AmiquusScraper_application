import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export interface UserInfoFormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserInfoFormProps {
  onDataChange: (data: UserInfoFormData) => void;
  initialData?: Partial<UserInfoFormData>;
}

export default function UserInfoForm({
  onDataChange,
  initialData,
}: UserInfoFormProps) {
  const [firstName, setFirstName] = useState<string>(initialData?.firstName || "");
  const [lastName, setLastName] = useState<string>(initialData?.lastName || "");
  const [email, setEmail] = useState<string>(initialData?.email || "");
  
  useEffect(() => {
    onDataChange({
      firstName,
      lastName,
      email,
    });
  }, [firstName, lastName, email, onDataChange]);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">
            First Name
          </Label>
          <Input
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">
            Last Name
          </Label>
          <Input
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
