module.exports = {
  name: "rules-button",
  async runInteraction(client, interaction) {
    let guildSettings = await client.getGuild(interaction.guild);

    await interaction.member.roles.add(guildSettings.RoleReglement);
    await interaction.reply({ content: 'Vous avez accepté les règles! Vous pouvez accéder au serveur!', ephemeral: true });
  },
};
