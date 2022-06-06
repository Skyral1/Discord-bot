const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(3)
            .addOptions([
                {
                    label: '1',
                    description: 'Choisir le chiffre 1',
                    value: '963418229525590047'
                },
                {
                    label: '2',
                    description: 'Choisir le chiffre 2',
                    value: '963418278926094356'
                },
                {
                    label: '3',
                    description: 'Choisir le chiffre 3',
                    value: '963418308676304917'
                }
            ])
    )

module.exports = {
  name: "roles",
  category: 'utils',
  permissions: ["MANAGE_ROLES"],
  description: "roles",
  async runInteraction(client, interaction) {
      await interaction.reply({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
  },
};
