module.exports = {
    name: "thread",
    category: "thread",
    permissions: ["MANAGE_THREAD"],
    description: "Commande concertant les threads",
    options: [
      {
        name: "join",
        description: "Joindre un thread",
        type: "SUB_COMMAND"
      },
      {
        name: "leave",
        description: "Quitter un thread",
        type: "SUB_COMMAND"
      },
      {
        name: "archive",
        description: "Archiver un thread",
        type: "SUB_COMMAND"
      },
      {
        name: "unarchive",
        description: "Désarchiver un thread",
        type: "SUB_COMMAND"
      },
      {
        name: "delete",
        description: "Supprimer un thread",
        type: "SUB_COMMAND",
        options: [ { name: 'channel', type: 'STRING', description: 'Id du channel', required: true } ]
      },
    ],
    async runInteraction(client, interaction) {
        let thread = interaction.channel;
        if (!thread.isThread()) return interaction.reply('impossible de taper cette commande car vous n\'etes pas dans un thread!')

        if (interaction.options.getSubcommand() === 'join' ) {
            interaction.reply('Le bot a rjoint le thread!');
            if (thread.joinable) await thread.join();
        } else if (interaction.options.getSubcommand() === 'leave' ) {
            interaction.reply('Le bot a quité le thread!');
            await thread.leave();
        } else if (interaction.options.getSubcommand() === 'archive' ) {
            await interaction.reply('Le thread est archivé!');
            await thread.setArchived(true);
        } else if (interaction.options.getSubcommand() === 'unarchive' ) {
            interaction.reply('Le thread est désarchivé!');
            await thread.setArchived(false);
        } else if (interaction.options.getSubcommand() === 'delete' ) {
            const channelId = interaction.options.getString('channel');
            const logChannel = client.channels.cache.get(channelId);
            await logChannel.send(`Le bot a supprimé le thrad: ${thread.name}!`);
            await thread.delete();
        }
    }
};