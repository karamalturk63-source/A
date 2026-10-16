const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// التوكن مقسوم صح بدون أي خطأ:
const part1 = "MTU0NDcxMDgxNjQ0NjgxMjMxMQ.";
const part2 = "G0DeTI.CTMMMz0K_QjmALBKYjM8U0IogLTLa6brcrKfkY";

client.once('ready', () => {
  console.log(`تم تسجيل الدخول بنجاح! البوت شغال باسم: ${client.user.tag}`);
});

client.login(part1 + part2);
