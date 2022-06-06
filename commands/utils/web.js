const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "web",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Lien du site web du bot",
  runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle("Toutatis WEB")
      .addField("Lien", "https://unsitebientot.kom")
      .setTimestamp()
      .setFooter({
        text: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      });
    interaction.reply({ embeds: [embed] });
  },
};
