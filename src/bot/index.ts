import { Telegraf } from "telegraf";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { echoHandler } from "./commands/echo";
import { env } from "../config";

export const bot = new Telegraf(env.BOT_TOKEN);

// Daftar command
bot.start(startCommand);
bot.help(helpCommand);

// Default handler untuk text
bot.on("text", echoHandler);
