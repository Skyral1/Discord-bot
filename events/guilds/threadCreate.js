module.exports = {
  name: "threadCreate",
  once: false,
  async execute(client, thread) {
    if (thread.isText()) thread.join();
    const logChannel = client.channels.cache.get("963062854183948378");
    logChannel.send(`
    Un nouveau thread est là!\nNom du thread: **${thread.name}!**`);
  }
};
