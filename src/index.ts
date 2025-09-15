import { env } from "./config";
import app from "./server";

console.log(`🚀 Server berjalan di http://localhost:${env.PORT}`);

export default {
  port: env.PORT,
  fetch: app.fetch,
};
