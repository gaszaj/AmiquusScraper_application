
import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import dodoWebhookHandler from "./routes/dodoWebhook";
import { startSubscriptionRetryJob } from "./jobs/subscriptionRetryJob";
import { registerDodoRoutes } from "./routes/dodo";

export const createApp = async () => {
  const app = express();

  // ✅ Register Dodo webhook BEFORE body parsing
  app.use("/api/dodo/webhook", dodoWebhookHandler);

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Logging
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: any;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }
        if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
        console.log(logLine);
      }
    });

    next();
  });

  registerRoutes(app);
  registerDodoRoutes(app);

  // start subscription retry job
  startSubscriptionRetryJob();

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || 500;
    res.status(status).json({ message: err.message || "Internal Server Error" });
  });

  return app;
};
