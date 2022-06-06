const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "report",
    category: 'utils',
    permissions: ["SEND_MESSAGES"],
    description: "Report un membre!",
    options: [
        {
        	name: "cible",
        	description: "Choisir un utilisateur",
        	type: "USER",
        	required: true
      	},
        {
            name: "raison",
            description: "Raison du report",
            type: "STRING",
            required: true
        }
      ],
    async runInteraction(client, interaction) {
    let guildSettings = await client.getGuild(interaction.guild);
    const suggcible = interaction.options.getUser("cible");
    const suggraison = interaction.options.getString("raison");
      const Reportembed = new MessageEmbed()
        .setTitle("Toutatis")
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Report", `Le membre ${suggcible} a été report par ${interaction.user.tag} car ${suggraison}`)
        .setTimestamp()
        .setFooter({
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        });

        const ReportChannel = client.channels.cache.get(guildSettings.ReportChannel);
        await interaction.reply(`Le membre ${suggcible} a été report car ${suggraison}`);
        ReportChannel.send({ embeds: [Reportembed] });
    },
  };
