module.exports = {
    name: "unmute",
    category: "moderation",
    permissions: ["MODERATE_MEMBERS"],
    description: "Unmute un membre",
    options: [
      {
        name: "cible",
        description: "Choisir un utilisateur",
        type: "USER",
        required: true
      },
    ],
    async runInteraction(client, interaction) {
        const cible = interaction.options.getMember('cible');

        if (!cible.isCommunicationDisabled()) return interaction.reply('Ce membre ne peut pas être unmute car il n\'est pas mute!');

        cible.timeout(null);
        interaction.reply(`Le membre ${cible} à été unmute!`);
    }
};