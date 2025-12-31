const { Events } = require('discord.js');

module.exports = {
  // event definition
	name: Events.ClientReady,
	once: true,

  // event execution
	execute(client) {
    var time = new Date
    console.log(time.toISOString())
    console.log(`Logged in as ${client.user.tag}!`);
    console.log("-----\nlist of guilds:")
    client.guilds.cache.forEach((guild) => {
      console.log(guild.name)
    })
	},
};
