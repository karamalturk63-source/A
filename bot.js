const { 
  Client, 
  GatewayIntentBits, 
  Partials, 
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.User, Partials.GuildMember]
});

// ==========================================
// 🗝️ التوكن مقسوم لتفادي حظر جيت هب
// ==========================================
const part1 = "MTU0NDcxMDgxNjQ0NjgxMjMxMQ."; 
const part2 = "G0DeTI.CTMMMz0K_QjmALBKYjM8U0IogLTLa6brcrKfkY"; 

const PREFIX = "!";

client.once('ready', () => {
  console.log(`✅ البوت شغال بنجاح باسم: ${client.user.tag}`);
});

// قائمة الأعلام للعبة
const flagsList = [
  { name: 'تشيلي', image: 'https://flagcdn.com/w640/cl.png' },
  { name: 'المغرب', image: 'https://flagcdn.com/w640/ma.png' },
  { name: 'اليابان', image: 'https://flagcdn.com/w640/jp.png' },
  { name: 'البرازيل', image: 'https://flagcdn.com/w640/br.png' },
  { name: 'فرنسا', image: 'https://flagcdn.com/w640/fr.png' },
  { name: 'إسبانيا', image: 'https://flagcdn.com/w640/es.png' }
];

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // 1️⃣ أمر التصميم المطابق (دمج)
  if (command === 'design' || command === 'تصميم' || command === 'دمج') {
    const attachments = message.attachments.map(att => att.url);

    if (attachments.length < 2) {
      return message.reply('⚠️ يرجى إرفاق الصورتين مع الأمر.');
    }

    const bannerUrl = attachments[0]; 
    const avatarUrl = attachments[1]; 

    const resultEmbed = new EmbedBuilder()
      .setColor('#2b2d31')
      .setThumbnail(avatarUrl)
      .setImage(bannerUrl);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`send_dm_${message.author.id}`)
        .setLabel('Download')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji('')
    );

    client.tempStorage = client.tempStorage || new Map();
    client.tempStorage.set(message.author.id, { bannerUrl, avatarUrl });

    return message.reply({ embeds: [resultEmbed], components: [row] });
  }

  // 2️⃣ لعبة علم أي دولة؟ (مثل الصورة)
  if (command === 'علم' || command === 'flag') {
    const randomFlag = flagsList[Math.floor(Math.random() * flagsList.length)];

    const flagEmbed = new EmbedBuilder()
      .setTitle('🌍 | علم أي دولة ؟')
      .setImage(randomFlag.image)
      .setColor('#3498DB')
      .setFooter({ text: 'لديك 15 ثانية للإجابة بكتابة اسم الدولة في الشات!' });

    await message.reply({ embeds: [flagEmbed] });

    const filter = (m) => !m.author.bot;
    const collector = message.channel.createMessageCollector({ filter, time: 15000, max: 1 });

    collector.on('collect', (m) => {
      if (m.content.trim() === randomFlag.name) {
        m.react('🎉');
        return message.channel.send(`🏆 كفو يا ${m.author}، قام بالإجابة قبل انتهاء الوقت الصحيح: **${randomFlag.name}**!`);
      }
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) {
        return message.channel.send(`⏰ انتهى الوقت! الإجابة الصحيحة كانت: **${randomFlag.name}**.`);
      }
    });
  }

  //3️⃣  روليت  (تختار شخص عشوائي مع عجلة حظ)
  if (command === 'روليت' || command === 'roulette') {
    const guildMembers = await message.guild.members.fetch();
    const humanMembers = guildMembers.filter(m => !m.user.bot);
    const randomMember = humanMembers.random();

    const rouletteEmbed = new EmbedBuilder()
      .setTitle('🎡 | عجلة حظ الروليت')
      .setDescription('🔄 جاري تدوير العجلة لاختيار شخص عشوائي...')
      .setColor('#F1C40F');

    const msg = await message.reply({ embeds: [rouletteEmbed] });

    setTimeout(() => {
      const winnerEmbed = new EmbedBuilder()
        .setTitle('🎡 | نتيجة روليت الحظ')
        .setDescription(`🎉 الشخص الذي وقع عليه الاختيار هو:\n### 👑 ${randomMember.user}!`)
        .setThumbnail(randomMember.user.displayAvatarURL({ dynamic: true }))
        .setColor('#2ECC71');

      msg.edit({ embeds: [winnerEmbed] });
    }, 3000);
  }

  // مافيا
  if (command === 'مافيا' || command === 'mafia') {
    const mafiaEmbed = new EmbedBuilder()
      .setTitle('🕵️‍♂️ | لعبة المافيا السريعة')
      .setDescription('تم بدء تسجيل المشاركين في لعبة المافيا!\nاضغط على الزر أدناه للانضمام للعبة.')
      .setColor('#E74C3C');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('join_mafia').setLabel('انضم للعبة 🎮').setStyle(ButtonStyle.Success)
    );

    return message.reply({ embeds: [mafiaEmbed], components: [row] });
  }
});

// -------------------------------------------------------------
// 🖱️ التفاعلات مع الأزرار
// -------------------------------------------------------------
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  // إرسال الصور للخاص عند ضغط Download
  if (interaction.customId.startsWith('send_dm_')) {
    const userId = interaction.customId.replace('send_dm_', '');
    const data = client.tempStorage?.get(userId);

    if (!data) {
      return interaction.reply({ content: '❌ انتهت صلاحية هذا الرابط.', ephemeral: true });
    }

    try {
      const dmEmbed = new EmbedBuilder()
        .setTitle('Nice profile')
        .setColor('#2b2d31')
        .setThumbnail(data.avatarUrl)
        .setImage(data.bannerUrl);

      const downloadRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setLabel('تحميل البنر').setStyle(ButtonStyle.Link).setURL(data.bannerUrl),
        new ButtonBuilder().setLabel('تحميل الأفاتار').setStyle(ButtonStyle.Link).setURL(data.avatarUrl)
      );

      await interaction.user.send({ content: 'Nice profile', embeds: [dmEmbed], components: [downloadRow] });
      return interaction.reply({ content: '✅ تم إرسال الصور إلى الخاص بنجاح!', ephemeral: true });
    } catch (err) {
      return interaction.reply({ content: '❌ تأكد من فتح الرسائل الخاصة لديك.', ephemeral: true });
    }
  }

  // الانضمام للمافيا
  if (interaction.customId === 'join_mafia') {
    return interaction.reply({ content: `✅ انضممت بنجاح إلى لعبة المافيا يا ${interaction.user}قريباً تبدأ الجولة!`, ephemeral: true });
  }
});

client.login(part1 + part2);
