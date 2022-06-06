module.exports = {
    name: "kick",
    category: "moderation",
    permissions: ["KICK_MEMBERS"],
    description: "Expulser un membre",
    options: [
      {
        name: "cible",
        description: "Choisir un utilisateur",
        type: "USER",
        required: true
      },
      {
        name: "raison",
        description: "Définir la raison du kick",
        type: "STRING",
        required: true
      },
    ],
    async runInteraction(client, interaction) {
        const cible = interaction.options.getMember('cible');
        const raison = interaction.options.getString('raison');

        if (!cible.kickable) return interaction.reply('Ce membre ne peut pas être kick par le bot!');

        cible.kick(raison);
        interaction.reply(`Le membre ${cible} à été kick!`);
    }
};