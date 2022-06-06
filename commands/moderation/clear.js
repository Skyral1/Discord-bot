module.exports = {
  name: "clear",
  category: "moderation",
  permissions: ["MANAGE_MESSAGES"],
  description: "Clear un nombre de messages",
  options: [
    {
      name: "message",
      description: "Le nombre de message à supprimer",
      type: "NUMBER",
      required: true,
    },
    {
      name: "target",
      description: "Choisir une cible",
      type: "USER",
      required: false,
    },
  ],
  async runInteraction(client, interaction) {
    const amountToDelete = interaction.options.getNumber("message");
    if (amountToDelete > 100 || amountToDelete < 0)
      return interaction.reply("Le nombre doit être entre 0 et 100");
    const target = interaction.options.getMember("target");

    const messagesToDelete = await interaction.channel.messages.fetch();

    if (target) {
      let i = 0;
      const filteredTargetMessages = [];
      (await messagesToDelete).filter((msg) => {
        if (msg.author.id == target.id && amountToDelete > i) {
          filteredTargetMessages.push(msg);
          i++;
        }
      });

      await interaction.channel
        .bulkDelete(filteredTargetMessages, true)
        .then((messages) => {
          interaction.reply(
            `J'ai supprimé ${messages.size} messages sur l'utilisateur ${target}!`
          );
        });
    } else {
      await interaction.channel
        .bulkDelete(amountToDelete, true)
        .then((messages) => {
          interaction.reply(
            `J'ai supprimé ${messages.size} messages sur ce salon!`
          );
        });
    }
  },
};
