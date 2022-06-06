module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    let guildsCount = await client.guilds.fetch();
    let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    console.log(`Je suis prêt à être utiliser par ${userCount} utilisateurs sur ${guildsCount.size} serveurs!`);

    client.user.setPresence({ activities: [{ name: '/help', type: 'WATCHING' }], status: 'online' })

    // Instantané car unique :
    const devGuild = await client.guilds.cache.get("972042377118220308");
    devGuild.commands.set(client.commands.map((cmd) => cmd));

    // 1H de délai car global :
    // client.application.commands.set(client.commands.map((cmd) => cmd));
  },
};
