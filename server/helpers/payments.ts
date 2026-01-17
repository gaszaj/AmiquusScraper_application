import { client as dodoClient } from "../routes/dodo";
import { storage } from "../storage";

export async function createOrFindCustomer(email: string, name: string, userId: number) {
    try {
        // Check if customer already exists
        for await (const customer of dodoClient.customers.list({ email })) {
            if (customer.email === email) {
                return customer; // Return existing customer
            }
        }

        // Create a new customer if not found
        const newCustomer = await dodoClient.customers.create({
            email,
            name,
            metadata: {
                userId: userId.toString(),
            },
        });

        return newCustomer;
    } catch (error: any) {
        console.error("Error in createOrFindCustomer:", error);
        throw new Error(error.message || "Failed to create or find customer");
    }
}

