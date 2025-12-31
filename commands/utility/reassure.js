const { SlashCommandBuilder } = require('@discordjs/builders');
const messages = require('../../db/messages.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reassure')
		.setDescription('Sends a reassuring message.')
		.addUserOption(option => option.setName('target')
      .setDescription('Who needs the support??')
      .setRequired(false)),

	async execute(interaction) {
		command_arguments = interaction.options.data

		var message = messages["reassure"][Math.floor(Math.random() * messages["reassure"].length)]

		if (command_arguments[0]) { //if an arguement was entered
			await interaction.reply("<@" + command_arguments[0]["value"] + "> " + message)
		}
		else {
			await interaction.reply(message)
		}
	},
};
