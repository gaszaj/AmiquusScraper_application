import { z } from "zod";

export const buildAlertSchema = (t: (key: string) => string) =>
  z.object({
    carBrand: z.string().min(1, t("alertSchema.errors.carBrand")),
    carModel: z.string().min(1, t("alertSchema.errors.carModel")),
    fuelType: z.string().min(1, t("alertSchema.errors.fuelType")),

    priceMin: z
      .string()
      .regex(/^\d*$/, t("alertSchema.errors.priceMin"))
      .optional()
      .or(z.literal("")),

    priceMax: z
      .string()
      .regex(/^\d*$/, t("alertSchema.errors.priceMax"))
      .optional()
      .or(z.literal("")),

    yearMin: z
      .string()
      .regex(/^\d{4}$/, t("alertSchema.errors.yearMin"))
      .optional()
      .or(z.literal("")),

    yearMax: z
      .string()
      .regex(/^\d{4}$/, t("alertSchema.errors.yearMax"))
      .optional()
      .or(z.literal("")),

    maxKilometers: z
      .string()
      .regex(/^\d*$/, t("alertSchema.errors.maxKilometers"))
      .optional()
      .or(z.literal("")),

    telegramUsername: z.string().min(1, t("alertSchema.errors.telegramUsername")),

    websitesSelected: z
      .array(z.string())
      .min(1, t("alertSchema.errors.websitesSelected")),

    facebookMarketplaceUrl: z.string().optional().or(z.literal("")),

    updateFrequency: z.enum(["hourly", "30min", "15min", "5min", "1min"]),

    notificationLanguage: z
      .string()
      .min(1, t("alertSchema.errors.notificationLanguage")),
  }).superRefine((data, ctx) => {
    if (
      data.websitesSelected.includes("facebook") &&
      !data.facebookMarketplaceUrl
    ) {
      ctx.addIssue({
        path: ["facebookMarketplaceUrl"],
        message: t("alertSchema.errors.facebookMarketplaceUrl"),
        code: z.ZodIssueCode.custom,
      });
    }
  });
