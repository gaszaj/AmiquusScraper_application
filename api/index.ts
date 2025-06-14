import { createApp } from "../server/app";

let cachedApp: ReturnType<typeof createApp>;

export default async function handler(req: any, res: any) {
  if (!cachedApp) {
    const app = await createApp();
    cachedApp = app;
  }

  return cachedApp(req, res);
}
