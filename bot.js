import { Telegraf } from 'telegraf';
import express from 'express';

const BOT_TOKEN = '8213602186:AAHMKsfPIx2BqT1c1ivWHUzcrZrip7gPOH8';

const bot = new Telegraf(BOT_TOKEN);

// Handle start command
bot.start((ctx) => ctx.reply('Добро пожаловать в Art Detailing!'));

// Handle help command
bot.help((ctx) => ctx.reply('Команды:\n/start - начать\n/help - помощь\n/book - записаться'));

// Handle book command
bot.command('book', (ctx) => {
  // Generate a Web App URL for the booking page
  const webAppUrl = 'https://your-domain.com'; // Replace with your deployed domain
  ctx.reply('Забронируйте услугу через веб-приложение:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть приложение', web_app: { url: webAppUrl } }]
      ]
    }
  });
});

// Launch the bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('Telegram bot is running...');