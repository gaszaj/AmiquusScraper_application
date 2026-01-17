import type { Express, Request, Response } from "express";
import DodoPayments from 'dodopayments';
import { storage } from "../storage";

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


}