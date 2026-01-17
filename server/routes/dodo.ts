import type { Express, Request, Response } from "express";
import DodoPayments from 'dodopayments';
import { storage } from "../storage";
import { validatePromoCode } from "server/helpers/payments";

// Initialize DodoPayments
// const client = process.env.DODO_PAYMENTS_API_KEY ? new DodoPayments({ bearerToken: process.env.DODO_PAYMENTS_API_KEY }) : undefined;

const DODO_PAYMENTS_API_KEY = process.env['DODO_PAYMENTS_API_KEY'];
const DODO_PAYMENTS_ENVIRONMENT = process.env['DODO_PAYMENTS_ENVIRONMENT'] || "test_mode";

export const client = new DodoPayments({
    bearerToken: DODO_PAYMENTS_API_KEY || "",
    environment: DODO_PAYMENTS_ENVIRONMENT as 'test_mode' | 'live_mode',
});

const isAuthenticated = (req: Request, res: Response, next: Function) => {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
};


export function registerDodoRoutes(app: Express) {
    // get list of customers
    app.get(
        "/api/dodo/customers",
        isAuthenticated,
        async (req: any, res) => {
            try {
                const customers = [];

                for await (const customer of client.customers.list()) {
                    customers.push(customer);
                }

                res.status(200).json({
                    message: "Dodo customers fetched successfully",
                    customers,
                });
            } catch (error: any) {
                console.error("Error fetching customers:", error);
                res.status(500).json({ message: error.message });
            }
        }
    );

    // validate discount
    app.get("/api/dodo/validate-discount", isAuthenticated, async (req: any, res) => {
        try {
            const userId = (req.user as any).id;

            if (!userId) {
                return res.status(401).json({ message: "User not authenticated." });
            }

            const code = String(req.query.code ?? "").trim();

            if (!code || code.length < 3) {
                return res.status(400).json({ message: "Promo code is required." });
            }

            const discount = await validatePromoCode(code);

            if (!discount) {
                return res.status(404).json({ message: "Invalid promo code." });
            }

            // check if discount has been used by other users
            const taken = await storage.isPromoCodeUsedByAnotherUser(userId, code);

            if (taken) {
                return res.status(400).json({ message: "This promo code can’t be used on your account." });
            }


            return res.status(200).json(discount);
        } catch (error: any) {
            console.error("Validate discount error:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    });
}