const { Events } = require('discord.js');
const mongodb_client = require("../mongodb/mongodb_init.js")

module.exports = {
  // event definition
	name: Events.MessageCreate,

  // event execution
	execute(message) {
		const collection = mongodb_client.db("glitch").collection("messages")

		var message_doc = {
			timestamp: message.createdTimestamp,
			channel: message.channelId,
			guild: message.guildId,
			id: message.id,
			author: message.author.id,
			content: message.content,
		}
		//console.log(message_doc)
		mongodb_client.connect();
		collection.insertOne(message_doc)
	},
};
