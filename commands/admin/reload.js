const { Guild } =  require('../../models/index');

module.exports = {
  name: "reload",
  category: 'admin',
  permissions: ["MANAGE_ROLES"],
  description: "Relancer le bot",
  async runInteraction(client, interaction) {
      await interaction.reply('Bot relancé avec succès!')
      return process.exit();
  },
};
