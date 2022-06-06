const { MessageEmbed, Message } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');

module.exports = {
  name: "help",
  category: 'utils',
  permissions: ["SEND_MESSAGES"],
  description: "Panneau d'aide!",
  options: [
    {
      name: "command",
      description: "Tapez le nom de votre commande",
      type: "STRING",
      required: false
    }
  ],
  async runInteraction(client, interaction) {
    const cmdName = interaction.options.getString('command');

    if (!cmdName) {
        const noArgsEmbed = new MessageEmbed()
        .setColor('#f54ea7')
        .addField('Liste de commandes', `Une liste de toutes les catégories disponibles et leurs commandes. \nPour plus d'informations sur une commade, tapez \`/help <nom-de-la-commande>\``)

        for (const category of commandFolder) {
            noArgsEmbed.addField(
                `+ ${category.replace(/(^\w|\s\w)/g, firtsLetter => firtsLetter.toUpperCase())}`,
                `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
            );
        }

        return interaction.reply({embeds : [noArgsEmbed], ephemeral: true});
    }

    const cmd = client.commands.get(cmdName);
    if (!cmd) return interaction.reply({ content: 'Cette commande n\`existe pas!', ephemeral: true})

    const argsEmbed = new MessageEmbed()
        .setColor('#f54ea7')
        .setTitle(`\`${cmd.name}\``)
        .setDescription(cmd.description)
        .setFooter({ text: `Permission(s) requise(s): ${cmd.permissions.join(', ')}` })

    return interaction.reply( {embeds : [argsEmbed], ephemeral: true});
  }
};
