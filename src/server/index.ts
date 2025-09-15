import { Hono } from "hono";
import { bot } from "../bot";

const app = new Hono();

// Health check
app.get("/", (c) =>
  c.json({
    success: true,
    message: "🤖 Bot Telegram aktif!",
  })
);

// Webhook endpoint
app.post("/webhook", async (c) => {
  try {
    const update = await c.req.json(); // ambil body JSON dari request Telegram
    await bot.handleUpdate(update); // lempar ke Telegraf
    return c.text("ok");
  } catch (err) {
    console.error("Webhook error:", err);
    return c.text("error", 500);
  }
});

export default app;
