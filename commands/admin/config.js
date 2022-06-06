const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "config",
    category: 'admin',
    permissions: ["ADMINISTRATOR"],
    description: "Donfigurer le bot",
    async runInteraction(client, interaction, guildSettings) {
        const embed = new MessageEmbed()
          .setTitle("Configuration de Toutatis")
          .setDescription("Voici les valeures modifiables:")
          .addFields(
            { name: "Bienvenue", value: `Définir le salon de bienvenue` },
            { name: "RoleReglement", value: `Définir le rôle du règlement` },
            { name: "SuggestChannel", value: `Définir le salon de suggestion` },
            { name: "ReportChannel", value: `Définir le salon de report` },
            { name: "TicketsChannel", value: `Définir le salon de tickets` },
          )
          .setTimestamp()
          .setFooter({
            text: "Skyral | Développeur JS",
          });
        interaction.reply({ embeds: [embed] });
    },
  };
