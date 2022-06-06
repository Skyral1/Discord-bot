const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "poll",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Postez votre propre sondage!",
  options: [
    {
      name: "titre",
      description: "Choisir un titre",
      type: "STRING",
      required: true,
    },
    {
      name: "contenu",
      description: "Choisir une question",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
    const polltitre = interaction.options.getString("titre");
    const pollcontenu = interaction.options.getString("contenu");

    const embed = new MessageEmbed()
      .setTitle(polltitre)
      .setColor("#00a3b5")
      .setDescription(pollcontenu)
      .setTimestamp()
      .setFooter({
        text: `Nouveau sondage généré par ${interaction.user.tag}`,
      });

    const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
    poll.react("✔");
    poll.react("❌");
  },
};
