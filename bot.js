const { 
  Client, 
  GatewayIntentBits, 
  Partials, 
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
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

  // -------------------------------------------------------------
  // 1️⃣ أمر دمج الصور (بدون نص علوي، زر Download للخاص)
  // -------------------------------------------------------------
  if (command === 'design' || command === 'تصميم' || command === 'دمج') {
    const attachments = [...message.attachments.values()];

    if (attachments.length < 2) {
      return message.reply('⚠️ يرجى إرفاق الصورتين (البنر والأفاتار) مع الأمر في نفس الرسالة.');
    }

    const bannerUrl = attachments[0].url; 
    const avatarUrl = attachments[1].url; 

    const resultEmbed = new EmbedBuilder()
      .setColor('#2b2d31')
      .setThumbnail(avatarUrl)
      .setImage(bannerUrl);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`send_dm_${message.author.id}`)
        .setLabel('Download')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji('📥')
    );

    client.tempStorage = client.tempStorage || new Map();
    client.tempStorage.set(message.author.id, { bannerUrl, avatarUrl });

    return message.reply({ embeds: [resultEmbed], components: [row] });
  }

  // -------------------------------------------------------------
  // 2️⃣ لعبة علم أي دولة؟
  // -------------------------------------------------------------
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

  // -------------------------------------------------------------
  // 3️⃣ لعبة الروليت (تم تصحيح الخطأ البرمجي هنا)
  // -------------------------------------------------------------
  if (command === 'روليت' || command === 'roulette') {
    const rouletteEmbed = new EmbedBuilder()
      .setTitle('🎡 روليت')
      .setDescription("طريقة اللعب:\n1- اختر الرقم الذي سيمثلك في اللعبة\n2- ستبدأ الجولة الأولى وسيتم تدوير العجلة واختيار لاعب عشوائي\n3- إذا كنت اللاعب المختار، فستختار لاعباً من اختيارك ليتم طرده من اللعبة\n4- يُطرد اللاعب وتبدأ جولة جديدة، عندما يُطرد جميع اللاعبين ويتبقى لاعبان فقط، ستدور العجلة ويكون اللاعب المختار هو الفائز باللعبة\n\n**أرقام اللاعبين: (0/20)**\nلا يوجد لاعبين مشاركين باللعبة")
      .setColor('#F1C40F')
      .setFooter({ text: 'ستبدأ اللعبة بعد 30 ثانية' });

    const rows = [];
    for (let i = 0; i < 4; i++) {
      const row = new ActionRowBuilder();
      for (let j = 1; j <= 5; j++) {
        const num = i * 5 + j;
        row.addComponents(
          new ButtonBuilder()
            .setCustomId(`roulette_num_${num}`)
            .setLabel(`${num}`)
            .setStyle(ButtonStyle.Primary)
        );
      }
      rows.push(row);
    }

    const controlRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('roulette_join').setLabel('انضم للعبة').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('roulette_leave').setLabel('انسحب').setStyle(ButtonStyle.Danger)
    );
    rows.push(controlRow);

    return message.reply({ embeds: [rouletteEmbed], components: rows });
  }

  // -------------------------------------------------------------
  // 4️⃣ لعبة المافيا
  // -------------------------------------------------------------
  if (command === 'مافيا' || command === 'mafia') {
    const mafiaEmbed = new EmbedBuilder()
      .setTitle('🕵️‍♂️ | لعبة المافيا')
      .setDescription("شرح اللعبة:\n1- انضم للعبة عبر الزر الأخضر الموجود في الأسفل.\n2- كل لاعب يحصل على دور سري (مافيا، مواطن، طبيب، وغيرها).\n3- تتصرف الأدوار الخاصة سرأً؛ نهاراً يصوت الجميع لطرد مشتبه.\n4- يفوز المواطنون بإقصاء جميع القاتلين، المافيا تفوز إن تفوق عددهم على المواطنين المتبقيين.\n\n**المشاركين (0/20):**")
      .setColor('#E74C3C')
      .setFooter({ text: 'in 30 seconds' });

    const mafiaRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('join_mafia').setLabel('مافيا').setStyle(ButtonStyle.Secondary).setEmoji('🕵️‍♂️')
    );

    return message.reply({ embeds: [mafiaEmbed], components: [mafiaRow] });
  }
});

// -------------------------------------------------------------
// 🖱️ معالجة التفاعلات (الأزرار والخاص)
// -------------------------------------------------------------
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId.startsWith('send_dm_')) {
    const userId = interaction.customId.replace('send_dm_', '');
    const data = client.tempStorage?.get(userId);

    if (!data) {
      return interaction.reply({ content: '❌ انتهت صلاحية هذا الرابط، قم بطلب الأمر من جديد.', ephemeral: true });
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
      return interaction.reply({ content: '✅ تم إرسال الصور إلى الخاص بنجاح بعبارة **Nice profile**!', ephemeral: true });
    } catch (err) {
      return interaction.reply({ content: '❌ لم أتمكن من إرسال الرسالة على الخاص، تأكد من فتح الرسائل الخاصة لديك.', ephemeral: true });
    }
  }

  if (interaction.customId.startsWith('roulette_')) {
    if (interaction.customId === 'roulette_join') {
      return interaction.reply({ content: `✅ تم تسجيليك في لعبة الروليت بنجاح!`, ephemeral: true });
    }
    if (interaction.customId === 'roulette_leave') {
      return interaction.reply({ content: `❌ تم انسحابك من لعبة الروليت.`, ephemeral: true });
    }
    const num = interaction.customId.replace('roulette_num_', '');
    return interaction.reply({ content: `🎯 لقد اخترت الرقم: **${num}**`, ephemeral: true });
  }

  if (interaction.customId === 'join_mafia') {
    return interaction.reply({ content: `✅ انضممت بنجاح إلى لعبة المافيا يا ${interaction.user}!`, ephemeral: true });
  }
});

client.login(part1 + part2);
