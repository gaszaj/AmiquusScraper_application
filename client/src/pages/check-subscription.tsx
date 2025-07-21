import { useState } from "react";

export default function CheckSubscriptionPage() {
  // const [subscriptionId, setSubscriptionId] = useState("");
  // const [result, setResult] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);

  // const handleCheck = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/check-subscription", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ subscriptionId }),
  //     });

  //     const data = await res.json();
  //     setResult(data.message || JSON.stringify(data.miniData));
  //     console.log(data.subscription, "subscription")
  //     console.log(data.activeSubscriptions, "activeSubscriptions")
  //     console.log(data.latestInvoiceForCustomer, "latestInvoiceForCustomer")
  //     console.log(data.latestInvoiceForSubscription, "latestInvoiceForSubscription")
  //   } catch (err) {
  //     setResult("Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="p-8 max-w-xl mx-auto mt-28">
      {/* <h1 className="text-2xl mb-4">Check Subscription</h1>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Enter Subscription ID"
        value={subscriptionId}
        onChange={(e) => setSubscriptionId(e.target.value)}
      />
      <button
        onClick={handleCheck}
        disabled={loading || !subscriptionId}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Checking..." : "Check"}
      </button>

      {result && <p className="mt-4">{result}</p>} */}
    </div>
  );
}
