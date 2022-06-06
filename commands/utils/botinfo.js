const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Informations sur le bot",
  async runInteraction(client, interaction) {
    let guildsCount = await client.guilds.fetch();
    let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    const embed = new MessageEmbed()
      .setTitle("Informations")
      .setDescription("Voici quelques informations me concernant :")
      .addFields(
        { name: "Version", value: `0.32`, inline: true },
        { name: "Serveurs", value: `${guildsCount.size}`, inline: true },
        { name: "Utilisateurs", value: `${userCount}`, inline: true },
        { name: "Site web", value: `[SITE_WEB](https://google.com)`, inline: true },
        { name: "Trello", value: `[Toutatis](https://trello.com/b/nsFuxlGx/toutatis)`, inline: true },
        { name: "Ajoute moi", value: `[[Invitation]](https://discord.com/api/oauth2/authorize?client_id=972038280327610428&permissions=8&scope=bot%20applications.commands)`, inline: true },
        { name: "Support", value: `[[Invitation]](https://discord.gg/pZZRdMJvpN)`, inline: true },
        { name: "Twitter", value: `[Toutatisbot](https://twitter.com/Toutatisbot)`, inline: true },
        { name: "Développeur", value: `[Skyral#1083](https://twitter.com/Skyral_)`, inline: true },
      )
      .setTimestamp()
      .setFooter({
        text: "Skyral | Développeur JS",
      });
    interaction.reply({ embeds: [embed] });
  },
};
