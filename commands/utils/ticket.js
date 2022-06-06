const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tickets",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Système de tickets",
  async runInteraction(client, interaction) {
    let guildSettings = await client.getGuild(interaction.guild);
    const Ticketembed = new MessageEmbed()
      .setTitle("Ticket")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("Cliquez sur le bouton correspondant ci-dessous afin de créer une demande auprès de notre équipe de support.")
      .setTimestamp()
      .setFooter({
        text: "Powered by Toutatis BOT",
        iconURL: client.user.displayAvatarURL(),
      });
    const TicketsChannel = client.channels.cache.get(guildSettings.TicketsChannel);
    TicketsChannel.reply({ embeds: [Ticketembed] });
  },
};