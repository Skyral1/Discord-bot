const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  category: 'users',
  permissions: ["KICK_MEMBERS"],
  type: "USER",
  async runInteraction(client, interaction) {
    const member = await interaction.guild.members.fetch(interaction.targetId);
    const embed = new MessageEmbed()
      .setAuthor({
        name: `${member.user.tag} (${member.id})`,
        iconURL: member.user.bot
          ? "https://cdn.discordapp.com/attachments/742735235090743337/963090802903502848/discordbot.png"
          : "https://cdn.discordapp.com/attachments/742735235090743337/963090893815046255/FUlSLLJv_400x400.jpg",
      })
      .setColor("#8e48f7")
      .setImage(member.user.displayAvatarURL())
      .setFields(
        { name: "Nom", value: `${member.displayName}`, inline: true },
        {
          name: "Modérateur",
          value: `${member.kickable ? "🔴" : "🟢"}`,
          inline: true,
        },
        {
          name: "Bot",
          value: `${member.user.bot ? "🟢" : "🔴"}`,
          inline: true,
        },
        {
          name: "Rôles",
          value: `${member.roles.cache
            .map((role) => role)
            .join(", ")
            .replace(", @everyone", " ")}`,
        },
        {
          name: "A créé son compte le",
          value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>`,
        },
        {
          name: "A rejoint le",
          value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>`,
        }
      );

    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
