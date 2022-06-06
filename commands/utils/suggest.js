const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "suggest",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Postez votre suggestion",
  options: [
    {
      name: "contenu",
      description: "Contenu de la suggestion",
      type: "STRING",
      required: true,
    }
  ],
  async runInteraction(client, interaction) {
    let guildSettings = await client.getGuild(interaction.guild);
    const suggcontenu = interaction.options.getString("contenu");

    const embed = new MessageEmbed()
      .setTitle(`Suggestion proposée par ${interaction.user.tag}`)
      .setColor("#00a3b5")
      .setDescription(suggcontenu)
      .setTimestamp()

    const SuggestChannel = client.channels.cache.get(guildSettings.SuggestChannel);
    await interaction.reply(`Suggestions envoyé dans le salon <#${guildSettings.SuggestChannel}>`);
    SuggestChannel.send({ embeds: [embed] });
  },
};
