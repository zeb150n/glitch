const { Events, MessageFlags } = require('discord.js');

module.exports = {
  // event definition
	name: Events.InteractionCreate,

  // event execution
	async execute(interaction) {
    // if interaction is not a chat command, return
		if (!interaction.isChatInputCommand()) return;

    // get command information from client based on command commandName
    // this is why we populated client.commands in bot.js
		const command = interaction.client.commands.get(interaction.commandName);

    // if command is not found in client.commands return
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

    // execute command
		try {
      // defined in /commands
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({
					content: 'There was an error while executing this command!',
					flags: MessageFlags.Ephemeral,
				});
			} else {
				await interaction.reply({
					content: 'There was an error while executing this command!',
					flags: MessageFlags.Ephemeral,
				});
			}
		}
	},
};
