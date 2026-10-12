const { Client, GatewayIntentBits, AttachmentBuilder, PermissionsBitField } = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const GIFEncoder = require('gifencoder');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// ضع توكن البوت الخاص بك هنا بين العلامتين
const TOKEN = 'MTU0NDcxMDgxNjQ0NjgxMjMxMQ.Gr8sNl.9GD1kFsdW_43smvp_Lt2W-MsfZ_Z-F7hW4TrGs';

client.on('ready', () => {
    console.log(`تم تشغيل بوت نشر الأفاتارات: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // أمر النشر !post (مخصص للإداريين فقط)
    if (message.content.startsWith('!post')) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return message.reply('هذا الأمر مخصص للإداريين فقط! ❌');
        }

        // التأكد من إرفاق صورتين (الأفاتار والبانر)
        const attachments = Array.from(message.attachments.values());
        if (attachments.length < 2) {
            return message.reply('يرجى إرفاق صورتين مع الأمر: **الأولى للأفاتار** و **الثانية للبانر**! 📸');
        }

        const avatarURL = attachments[0].url;
        const bannerURL = attachments[1].url;

        const isGif = avatarURL.includes('.gif') || bannerURL.includes('.gif');

        try {
            const waitMsg = await message.reply('جاري معالجة وتجهيز التصميم... ⏳');

            const width = 960;
            const height = 480;
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');

            const avatarImg = await loadImage(avatarURL);
            const bannerImg = await loadImage(bannerURL);

            const drawFrame = () => {
                ctx.clearRect(0, 0, width, height);

                // 1. رسم البانر بالكامل في الأعلى
                ctx.drawImage(bannerImg, 0, 0, width, 320);

                // 2. خلفية البروفايل الداكنة بالأسفل
                ctx.fillStyle = '#0f0f0f';
                ctx.fillRect(0, 320, width, 160);

                // 3. قص ورسم الأفاتار بشكل دائري
                ctx.save();
                ctx.beginPath();
                const centerX = 160;
                const centerY = 320;
                const radius = 95;

                ctx.arc(centerX, centerY, radius + 8, 0, Math.PI * 2, true);
                ctx.fillStyle = '#0f0f0f';
                ctx.fill();

                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();

                ctx.drawImage(avatarImg, centerX - radius, centerY - radius, radius * 2, radius * 2);
                ctx.restore();
            };

            if (isGif) {
                const encoder = new GIFEncoder(width, height);
                const stream = encoder.createReadStream();
                const buffers = [];

                stream.on('data', (buffer) => buffers.push(buffer));
                stream.on('end', async () => {
                    const finalBuffer = Buffer.concat(buffers);
                    const attachment = new AttachmentBuilder(finalBuffer, { name: 'profile-post.gif' });
                    await waitMsg.delete().catch(() => {});
                    await message.channel.send({ files: [attachment] });
                });

                encoder.start();
                encoder.setRepeat(0);
                encoder.setDelay(100);
                encoder.setQuality(10);

                for (let i = 0; i < 10; i++) {
                    drawFrame();
                    encoder.addFrame(ctx);
                }

                encoder.finish();
            } else {
                drawFrame();
                const attachment = new AttachmentBuilder(canvas.toBuffer(), { name: 'profile-post.png' });
                await waitMsg.delete().catch(() => {});
                await message.channel.send({ files: [attachment] });
            }

        } catch (err) {
            console.error(err);
            message.reply('حدث خطأ أثناء معالجة الصور.');
        }
    }
});

client.login(MTU0NDcxMDgxNjQ0NjgxMjMxMQ.Gr8sNl.9GD1kFsdW_43smvp_Lt2W-MsfZ_Z-F7hW4TrGs);
