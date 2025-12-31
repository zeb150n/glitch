const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	// command definition
	data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),

	// command execution
	async execute(interaction) {
		await interaction.reply('boop!');
	},
};
