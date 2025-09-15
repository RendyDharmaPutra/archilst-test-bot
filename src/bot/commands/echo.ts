import { Context } from "telegraf";

export const echoHandler = (ctx: Context) => {
  if (ctx.message && "text" in ctx.message) {
    ctx.reply(`Kamu berkata: ${ctx.message.text}`);
  }
};
