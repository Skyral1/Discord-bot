// const { MessageEmbed } = require("discord.js");
// const moment = require("moment");

// const filterLevels = {
//   DISABLED: "Off",
//   MEMBERS_WITHOUT_ROLES: "No Role",
//   ALL_MEMBERS: "Everyone",
// };

// const verificationLevels = {
//   NONE: "None",
//   LOW: "Low",
//   MEDIUM: "Medium",
//   HIGH: "(╯°□°）╯︵ ┻━┻",
//   VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻",
// };

// const regions = {
//   brazil: "Brazil",
//   europe: "Europe",
//   hongkong: "Hong Kong",
//   india: "India",
//   japan: "Japan",
//   russia: "Russia",
//   singapore: "Singapore",
//   southafrica: "South Africa",
//   sydeny: "Sydeny",
//   "us-central": "US Central",
//   "us-east": "US East",
//   "us-west": "US West",
//   "us-south": "US South",
// };

// module.exports = {
//   name: "serverinfo",
//   category: 'utils',
//   permissions: ["SEND_MESSAGES"],
//   description: "Inforations du serveur",
//   runInteraction (client, interaction) {
//     const roles = interaction.guild.roles.cache
//       .sort((a, b) => b.position - a.position)
//       .map((role) => role.toString());
//     const members = interaction.guild.members.cache;
//     const channels = interaction.guild.channels.cache;
//     const emojis = interaction.guild.emojis.cache;

//     const embed = new MessageEmbed()
//       .setDescription(`**Server Info**`)
//       .setColor("BLACK")
//       .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
//       .addField("General", [
//         `**Name:** ${interaction.guild.name}`,
//         `**ID:** ${interaction.guild.id}`,
//         `**Region:** ${regions[interaction.guild.region]}`,
//         `**Boost Tier:** ${
//           interaction.guild.premiumTier
//             ? `Tier ${interaction.guild.premiumTier}`
//             : "None"
//         }`,
//         `**Explicit Filter:** ${
//           filterLevels[interaction.guild.explicitContentFilter]
//         }`,
//         `**Verification Level:** ${
//           verificationLevels[interaction.guild.verificationLevel]
//         }`,
//         `**Time Created:** ${moment(interaction.guild.createdTimestamp).format(
//           "LT"
//         )} ${moment(interaction.guild.createdTimestamp).format("LL")} [${moment(
//           interaction.guild.createdTimestamp
//         ).fromNow()}]`,
//         "\u200b",
//       ])
//       .addField("Statistics", [
//         `**Role Count:** ${roles.length}`,
//         `**Emoji Count:** ${emojis.size}`,
//         `**Regular Emoji Count:** ${
//           emojis.filter((emoji) => !emoji.animated).size
//         }`,
//         `**Animated Emoji Count:** ${
//           emojis.filter((emoji) => emoji.animated).size
//         }`,
//         `**Member Count:** ${interaction.guild.memberCount}`,
//         `**Humans:** ${members.filter((member) => !member.user.bot).size}`,
//         `**Bots:** ${members.filter((member) => member.user.bot).size}`,
//         `**Text Channels:** ${
//           channels.filter((channel) => channel.type === "text").size
//         }`,
//         `**Voice Channels:** ${
//           channels.filter((channel) => channel.type === "voice").size
//         }`,
//         `**Boost Count:** ${interaction.guild.premiumSubscriptionCount || "0"}`,
//         "\u200b",
//       ])
//       interaction.reply({ embeds: [embed], ephemeral: true });
//   },
// };

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "utils",
  permissions: ["SEND_MESSAGES"],
  description: "Inforations du serveur",
  runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle(interaction.guild.name)
      .setColor(3447003)
      .setDescription( `Owner: ${interaction.guild.fetchOwner.cache} (${interaction.guild.ownerId})`)
      .addField("Member Count", `${interaction.guild.memberCount}`, true)
      .addField("Location", `${interaction.guild.region}`, true)
      .addField("Crée le", `${interaction.guild.createdAt.toLocaleString()}`, true)
      .setTimestamp()
      .setFooter(client.user.username)

      interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
