module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    description: "Bannir un membre",
    options: [
      {
        name: "cible",
        description: "Choisir un utilisateur",
        type: "USER",
        required: true
      },
      {
        name: "raison",
        description: "Définir la raison du ban",
        type: "STRING",
        required: true
      },
    ],
    async runInteraction(client, interaction) {
        const cible = interaction.options.getMember('cible');
        const raison = interaction.options.getString('raison');

        if (!cible.bannable) return interaction.reply('Ce membre ne peut pas être ban par le bot!');

        cible.ban({ raison });
        interaction.reply(`Le membre ${cible} à été bani!`);
    }
};