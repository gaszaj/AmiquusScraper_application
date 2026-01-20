
import { createApp } from "../dist/app.js"; // will be compiled here after esbuild
import dotenv from 'dotenv';

dotenv.config();
let cachedApp: any;

export default async function handler(req: any, res: any) {
  if (!cachedApp) {
    cachedApp = await createApp();
  }

  return cachedApp(req, res);
}
