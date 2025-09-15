import { Context } from "telegraf";

export const helpCommand = (ctx: Context) => {
  ctx.reply("📖 Daftar perintah:\n/start - mulai\n/help - bantuan");
};
