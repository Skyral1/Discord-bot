const ms = require('ms');

module.exports = {
    name: "mute",
    category: "moderation",
    permissions: ["MODERATE_MEMBERS"],
    description: "Mute temporairement un membre",
    options: [
      {
        name: "cible",
        description: "Choisir un utilisateur",
        type: "USER",
        required: true
      },
      {
        name: "durée",
        description: "Choisir une durée",
        type: "STRING",
        required: true
      },
      {
        name: "raison",
        description: "Définir la raison du mute",
        type: "STRING",
        required: true
      },
    ],
    async runInteraction(client, interaction) {
        const cible = interaction.options.getMember('cible');
        const durée = interaction.options.getString('durée');
        const convertedTime = ms(durée);
        const raison = interaction.options.getString('raison');

        if (!cible.moderatable) return interaction.reply('Ce membre ne peut pas être mute par le bot!');
        if (!convertedTime) return interaction.reply('Spécifier une durée valable!');

        cible.timeout(convertedTime, raison);
        interaction.reply(`Le membre ${cible} à été mute pour ${durée} car ${raison}!`);
    }
};