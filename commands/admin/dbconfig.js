module.exports = {
    name: "dbconfig",
    category: 'admin',
    permissions: ["ADMINISTRATOR"],
    description: "Donfigurer DB",
    options: [
      {
        name: "key",
        description: "Choisir une clé à modifier",
        type: "STRING",
        required: true,
        choices: [
          {
            name: "Bienvenue",
            value: "Bienvenue",
          },
          {
            name: "RoleReglement",
            value: "RoleReglement",
          },
          {
            name: "SuggestChannel",
            value: "SuggestChannel",
          },
          {
            name: "ReportChannel",
            value: "ReportChannel",
          },
          {
            name: "TicketsChannel",
            value: "TicketsChannel",
          },
        ]
      },
      {
        name: "value",
        description: "Choisir la nouvelle valeure pour vottre clé",
        type: "STRING"
      }
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString("key");
        const value = interaction.options.getString("value");
  
      if (key == "Bienvenue") {
        if (value) {
            await client.updateGuild(interaction.guild, { Bienvenue: value });
            return interaction.reply({ content: `Nouvelle valeure de Bienvenue: ${value}` })
        }
        interaction.reply({ content: `Valeure de Bienvenue: ${guildSettings.Bienvenue}` })
      }

      if (key == "RoleReglement") {
        if (value) {
            await client.updateGuild(interaction.guild, { RoleReglement: value });
            return interaction.reply({ content: `Nouvelle valeure de RoleReglement: ${value}` })
        }
        interaction.reply({ content: `Valeure de RoleReglement: ${guildSettings.RoleReglement}` })
      }

      if (key == "SuggestChannel") {
        if (value) {
            await client.updateGuild(interaction.guild, { SuggestChannel: value });
            return interaction.reply({ content: `Nouvelle valeure de SuggestChannel: ${value}` })
        }
        interaction.reply({ content: `Valeure de SuggestChannel: ${guildSettings.SuggestChannel}` })
      }
        
      if (key == "ReportChannel") {
       	if (value) {
           await client.updateGuild(interaction.guild, { ReportChannel: value });
           return interaction.reply({ content: `Nouvelle valeure de ReportChannel: ${value}` })
       }
       interaction.reply({ content: `Valeure de ReportChannel: ${guildSettings.ReportChannel}` })
      }
        
      if (key == "TicketsChannel") {
       	if (value) {
           await client.updateGuild(interaction.guild, { TicketsChannel: value });
           return interaction.reply({ content: `Nouvelle valeure de TicketsChannel: ${value}` })
       }
       interaction.reply({ content: `Valeure de TicketsChannel: ${guildSettings.TicketsChannel}` })
      }
    },
  };
