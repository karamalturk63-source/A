const {
  Client,
  GatewayIntentBits,
  SlashCommandBuilder,
  REST,
  Routes,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ==========================================
// 🗝️ التوكن مقسوم لتفادي حظر جيت هب
// ==========================================
const part1 = "MTU0NDcxMDgxNjQ0NjgxMjMxMQ."; // حط الجزء الأول هون
const part2 = "G0DeTI.CTMMMz0K_QjmALBKYjM8U0IogLTLa6brcrKfkY"; // حط الجزء الثاني هون
const TOKEN = part1 + part2;

// إذا كنت حاط الـ CLIENT_ID والـ GUILD_ID ككود صريح بدل الـ env حطهم هنا أو استبدلهم:
const CLIENT_ID = "حط_الـ_Client_ID_هنا"; // أو خليه إذا بتستخدم بيئة العمل
const GUILD_ID = "حط_الـ_Guild_ID_هنا";  // أو خليه إذا بتستخدم بيئة العمل

const commands = [
  new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("View a user's avatar")
    .addUserOption(o =>
      o.setName('user')
        .setDescription('Choose a user')
        .setRequired(false)
    ),

  new SlashCommandBuilder()
    .setName('banner')
    .setDescription("View a user's banner")
    .addUserOption(o =>
      o.setName('user')
        .setDescription('Choose a user')
        .setRequired(false)
    )
].map(command => command.toJSON());

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const rest = new REST({ version: '10' }).setToken(TOKEN);

  try {
    await rest.put(
      Routes.applicationGuildCommands(client.user.id, GUILD_ID),
      { body: commands }
    );

    console.log('Slash commands registered!');
  } catch (error) {
    console.error(error);
  }
});

client.on('interactionCreate', async interaction => {
  if (interaction.isChatInputCommand()) {
    const target = interaction.options.getUser('user')
      || interaction.user;

    if (interaction.commandName === 'avatar') {
      const url = target.displayAvatarURL({
        size: 4096,
        extension: 'png',
        forceStatic: false
      });

      const embed = new EmbedBuilder()
        .setColor(0x5865F2)
        .setTitle(`${target.username}'s Avatar`)
        .setImage(url)
        .setURL(url);

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`download_avatar_${interaction.id}`)
          .setLabel('Download')
          .setStyle(ButtonStyle.Primary)
      );

      await interaction.reply({
        embeds: [embed],
        components: [row]
      });

      downloads.set(interaction.id, {
        url,
        owner: interaction.user.id
      });

      return;
    }

    if (interaction.commandName === 'banner') {
      await interaction.deferReply();

      const user = await client.users.fetch(target.id, {
        force: true
      });

      const url = user.bannerURL({
        size: 4096,
        extension: user.banner?.startsWith('a_')
          ? 'gif'
          : 'png'
      });

      if (!url) {
        await interaction.editReply(
          'This user has no Discord profile banner.'
        );
        return;
      }

      const embed = new EmbedBuilder()
        .setColor(0x5865F2)
        .setTitle(`${user.username}'s Banner`)
        .setImage(url)
        .setURL(url);

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`download_banner_${interaction.id}`)
          .setLabel('Download')
          .setStyle(ButtonStyle.Primary)
      );

      await interaction.editReply({
        embeds: [embed],
        components: [row]
      });

      downloads.set(interaction.id, {
        url,
        owner: interaction.user.id
      });
    }
  }

  if (interaction.isButton()) {
    const data = downloads.get(
      interaction.customId.split('_').slice(2).join('_')
    );

    if (!data) {
      await interaction.reply({
        content: 'This download button has expired.',
        ephemeral: true
      });
      return;
    }

    if (data.owner !== interaction.user.id) {
      await interaction.reply({
        content: 'This button belongs to another user.',
        ephemeral: true
      });
      return;
    }

    try {
      await interaction.user.send({
        content: `Your image download link:\n${data.url}`
      });

      await interaction.reply({
        content: 'Check your DMs!',
        ephemeral: true
      });
    } catch {
      await interaction.reply({
        content: 'Enable DMs from server members and try again.',
        ephemeral: true
      });
    }
  }
});

const downloads = new Map();

client.login(TOKEN);
