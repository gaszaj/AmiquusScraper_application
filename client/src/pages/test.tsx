import { useState } from "react";

export default function DodoTestPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchCustomers = async () => {
        setLoading(true);
        setResult(null);
        setError(null);

        try {
            const res = await fetch("/api/dodo/customers", {
                method: "GET",
                credentials: "include", // IMPORTANT: sends auth cookies/session
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Request failed");
            }

            setResult(data.message);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 24 }}>
            <h2>Dodo API Test</h2>

            <button
                onClick={fetchCustomers}
                disabled={loading}
                style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    cursor: "pointer",
                }}
            >
                {loading ? "Fetching..." : "Fetch Dodo Customers"}
            </button>

            {result && (
                <p style={{ marginTop: 16, color: "green" }}>
                    ✅ {result}
                </p>
            )}

            {error && (
                <p style={{ marginTop: 16, color: "red" }}>
                    ❌ {error}
                </p>
            )}
        </div>
    );
}
