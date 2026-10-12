import express from "express";
import { createApp } from "../server/_core/app";

const app = createApp();
const handler = express();

handler.use((req, _res, next) => {
  if (req.url?.startsWith("/api/manus-storage/")) {
    req.url = req.url.replace(/^\/api(?=\/manus-storage\/)/, "");
  }

  next();
});

handler.use(app);

export default handler;