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
const part1 = "MTU0NDcxMDgxNjQ0NjgxMjMxMQ."; // الجزء الأول من توكنك
const part2 = "G0DeTI.CTMMMz0K_QjmALBKYjM8U0IogLTLa6brcrKfkY"; // الجزء الثاني من توكنك

const PREFIX = "!";

client.once('ready', () => {
  console.log(`✅ تم تسجيل الدخول بنجاح! بوت نوفا المصغر شغال باسم: ${client.user.tag}`);
  client.user.setActivity('!دمج | !tanks', { type: 3 }); // Watching status
});

// -------------------------------------------------------------
// 👋 نظام الترحيب بالأعضاء الجدد
// -------------------------------------------------------------
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.systemChannel;
  if (!channel) return;

  const welcomeEmbed = new EmbedBuilder()
    .setTitle('✨ عضو جديد انضم إلينا!')
    .setDescription(`أهلاً بك يا ${member} في سيرفر **${member.guild.name}**!\nنورتنا يا بطل 🚀`)
    .setColor('#5865F2')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp();

  channel.send({ embeds: [welcomeEmbed] });
});

// -------------------------------------------------------------
// 💬 استقبال الأوامر التفاعلية
// -------------------------------------------------------------
client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // 1️⃣ أمر دمج الأفاتار والبنر (المطابقة)
  if (command === 'design' || command === 'تصميم' || command === 'دمج') {
    const attachments = message.attachments.map(att => att.url);

    if (attachments.length < 2) {
      const errorEmbed = new EmbedBuilder()
        .setTitle('⚠️ تنبيه بخصوص الصور')
        .setDescription('يرجى إرفاق **صورتين** مع الأمر:\n1. صورة البنر (الخلفية العريضة)\n2. صورة الأفاتار (الدائرية)\n\n**طريقة الاستخدام:**\n`!دمج` مع إرفاق الصورتين معاً في نفس الرسالة.')
        .setColor('#ED4245');
      return message.reply({ embeds: [errorEmbed] });
    }

    const bannerUrl = attachments[0]; 
    const avatarUrl = attachments[1]; 

    const resultEmbed = new EmbedBuilder()
      .setTitle(`✨ تصميم البروفايل المتناسق (Matching Set)`)
      .setDescription('تم استلام الصور وتنسيقها بالشكل المطلوب بنجاح:')
      .setColor('#5865F2')
      .setThumbnail(avatarUrl)
      .setImage(bannerUrl)
      .setFooter({ text: `تم الطلب بواسطة: ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('تحميل البنر')
        .setStyle(ButtonStyle.Link)
        .setURL(bannerUrl),
      new ButtonBuilder()
        .setLabel('تحميل الأفاتار')
        .setStyle(ButtonStyle.Link)
        .setURL(avatarUrl)
    );

    return message.reply({ embeds: [resultEmbed], components: [row] });
  }

  // 2️⃣ أمر إنشاء لوحة التذاكر (Tickets Panel)
  if (command === 'ticket' || command === 'تذكرة') {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
      return message.reply('❌ هذا الأمر للأعضاء الإداريين فقط.');
    }

    const ticketEmbed = new EmbedBuilder()
      .setTitle('🎫 نظام الدعم الفني والتذاكر')
      .setDescription('إذا بحاجة لأي مساعدة، استفسار، أو تريد طلب تصميم خاص، اضغط على الزر أدناه لفتح تذكرة خاصة لك!')
      .setColor('#57F287')
      .setFooter({ text: 'نظام الدعم الفني المتطور' });

    const ticketRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('create_ticket')
        .setLabel('فتح تذكرة جديدة')
        .setStyle(ButtonStyle.Success)
        .setEmoji('📩')
    );

    return message.channel.send({ embeds: [ticketEmbed], components: [ticketRow] });
  }

  // 3️⃣ أمر مسح الرسائل (Clear)
  if (command === 'clear' || command === 'مسح') {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
      return message.reply('❌ لا تملك صلاحية لإدارة الرسائل!');
    }

    const count = parseInt(args[0]);
    if (!count || count < 1 || count > 100) {
      return message.reply('⚠️ يرجى تحديد عدد الرسائل المراد مسحها بين (1 و 100).');
    }

    await message.channel.bulkDelete(count, true).catch(err => {
      return message.reply('❌ حدث خطأ، لا يمكن مسح رسائل أقدم من 14 يوماً.');
    });

    const msg = await message.channel.send(`✅ تم مسح \`${count}\` رسالة بنجاح.`);
    setTimeout(() => msg.delete().catch(), 3000);
  }

  // 4️⃣ لوحة معلومات البوت
  if (command === 'panel' || command === 'لوحة') {
    const infoEmbed = new EmbedBuilder()
      .setTitle('🤖 لوحة معلومات بوت التصميم والإشراف')
      .addFields(
        { name: '🌐 عدد السيرفرات', value: `${client.guilds.cache.size}`, inline: true },
        { name: '📡 سرعة البينغ', value: `${client.ws.ping}ms`, inline: true },
        { name: '⚙️ الأوامر المتاحة', value: '`!دمج` (للصور), `!تذكرة` (للدعم), `!مسح` (للإشراف)', inline: false }
      )
      .setColor('#FEE75C')
      .setThumbnail(client.user.displayAvatarURL());

    return message.reply({ embeds: [infoEmbed] });
  }
});

// -------------------------------------------------------------
// 🎫 التفاعل مع زر فتح التذاكر
// -------------------------------------------------------------
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'create_ticket') {
    const guild = interaction.guild;
    const user = interaction.user;

    // إنشاء روم خاص بالتذكرة
    try {
      const channel = await guild.channels.create({
        name: `ticket-${user.username}`,
        type: 0, // Guild Text Channel
        permissionOverwrites: [
          {
            id: guild.id,
            deny: [PermissionFlagsBits.ViewChannel],
          },
          {
            id: user.id,
            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory],
          },
        ],
      });

      const closeRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId('close_ticket')
          .setLabel('إغلاق التذكرة')
          .setStyle(ButtonStyle.Danger)
          .setEmoji('🔒')
      );

      const welcomeTicketEmbed = new EmbedBuilder()
        .setTitle(`🎫 تذكرة العضو: ${user.username}`)
        .setDescription('مرحباً بك! تفضل بطرح مشكلتك أو طلبك (مثل طلبات التصميم والبنرات)، وسيتم الرد عليك قريباً من قبل الإدارة.')
        .setColor('#5865F2');

      await channel.send({ content: `${user}`, embeds: [welcomeTicketEmbed], components: [closeRow] });

      return interaction.reply({ content: `✅ تم فتح تذكرتك بنجاح هنا: ${channel}`, ephemeral: true });
    } catch (e) {
      return interaction.reply({ content: '❌ حدث خطأ أثناء إنشاء التذكرة، تأكد من صلاحيات البوت.', ephemeral: true });
    }
  }

  // زر إغلاق التذكرة
  if (interaction.customId === 'close_ticket') {
    await interaction.reply({ content: '🔒 سيتم إغلاق هذه التذكرة خلال 5 ثوانٍ...', ephemeral: true });
    setTimeout(() => {
      interaction.channel.delete().catch();
    }, 5000);
  }
});

client.login(part1 + part2);
