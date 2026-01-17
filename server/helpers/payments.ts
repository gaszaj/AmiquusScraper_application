import { Discount } from "dodopayments/resources/discounts.mjs";
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

export async function validatePromoCode(code: string) {
    try {
      const input = code.trim();
      if (!input) return null;
  
      const PAGE_SIZE = 100;
      const MAX_RESULTS = 300;
      const MAX_PAGES = Math.ceil(MAX_RESULTS / PAGE_SIZE); // 3 pages: 0,1,2
  
      for (let page = 0; page < MAX_PAGES; page++) {
        const batch: Discount[] = [];
  
        // discounts.list only supports page_size + page_number
        for await (const discount of dodoClient.discounts.list({
          page_size: PAGE_SIZE,
          page_number: page,
        })) {
          batch.push(discount);
        }
  
        // If API returns no items, no need to keep paging
        if (batch.length === 0) return null;
  
        // Case-sensitive comparison (exact match)
        const found = batch.find((d) => d.code === input);
        if (found) return found;
  
        // If we received fewer than a full page, we've reached the end
        if (batch.length < PAGE_SIZE) return null;
      }
  
      // Not found within first 300
      return null;
    } catch (error: any) {
      console.error("Error in validatePromoCode:", error);
      throw new Error(error?.message || "Failed to validate promo code");
    }
  }
  

