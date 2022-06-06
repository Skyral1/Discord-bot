const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setURL('https://discord.gg/pZZRdMJvpN')
    .setLabel("Rejoindre le Support")
    .setStyle("LINK")
);

module.exports = {
  name: "support",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Recevoir une invitation pour rejoindre le support",
  runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle("Support de Toutatis")
      .setURL("https://discord.gg/pZZRdMJvpN")
      .setDescription('Il est tout à fait normal de rencontrer un problème, ça peut arriver à tout le monde ! \n\nVoici une invitation vers [mon support](https://discord.gg/pZZRdMJvpN) où tu pourras demander de l\'aide à un @Helper.\n\nCordialement **Toutatis**')
    interaction.reply({ embeds: [embed], components: [buttons] });
  },
};
