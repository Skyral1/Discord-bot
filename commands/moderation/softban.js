module.exports = {
    name: "softban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    description: "Bannir temporairement un membre",
    options: [
      {
        name: "cible",
        description: "Choisir un utilisateur",
        type: "USER",
        required: true
      },
      {
        name: "durée",
        description: "Choisir une durée en jours",
        type: "NUMBER",
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
        const durée = interaction.options.getNumber('durée');
        const raison = interaction.options.getString('raison');

        if (!cible.bannable) return interaction.reply('Ce membre ne peut pas être ban par le bot!');

        cible.ban({ days: durée, raison: raison });
        interaction.reply(`Le membre ${cible} à été bani pour ${durée} jours!`);
    }
};