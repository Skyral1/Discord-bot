const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setCustomId("rules-button")
    .setLabel("✅ Accepter")
    .setStyle("SUCCESS")
);

const rulesEmbed = new MessageEmbed()
  .setTitle("📜Acceptez le règlement")
  .setDescription("Cliquez sur le bouton ci-dessous pour accepter le règlement.")
  .setFooter({
    text: "Toutatis",
  })
  .setTimestamp();
  
module.exports = {
  name: "rules",
  category: "admin",
  permissions: ["ADMINISTRATOR"],
  description: "Validation du règlement!",
  async runInteraction(client, interaction) {
    await interaction.reply({ embeds: [rulesEmbed], components: [buttons] });
  },
};
