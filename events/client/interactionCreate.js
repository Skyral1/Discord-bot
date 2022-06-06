module.exports = {
  name: "interactionCreate",
  once: false,
  async execute(client, interaction) {
    let guildSettings = await client.getGuild(interaction.guild); 

    if (!guildSettings) {
      await client.createGuild(interaction.guild);
      guildSettings = await client.getGuild(interaction.guild);
      return interaction.reply('Le bot a mis à jour la base de données pour votre serveur, retapez la commande!')
    }

    if (interaction.isCommand() || interaction.isContextMenu()) {
      const cmd = client.commands.get(interaction.commandName);
      if (!cmd) return interaction.reply("Cette commande n'existe pas!");

      if (!interaction.member.permissions.has([cmd.permissions]))
        return interaction.reply({
          content: `Vous n'avez pas la/les permission(s) reqise(s) (\`${cmd.permissions.join(", ")}\`) pour utliliser cette commande!`,
          ephemeral: true,
        });
      cmd.runInteraction(client, interaction, guildSettings);
    } else if (interaction.isButton()) {
      const btn = client.buttons.get(interaction.customId);
      if (!btn) return interaction.reply("Ce boutton n'existe pas!");
      btn.runInteraction(client, interaction, guildSettings);
    }
      else if (interaction.isSelectMenu()) {
      const selectMenu = client.selects.get(interaction.customId);
      if (!selectMenu) return interaction.reply("Ce menu n'existe pas!");
      selectMenu.runInteraction(client, interaction, guildSettings);
    }
  },
};
