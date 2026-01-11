const { SlashCommandBuilder } = require('discord.js');
const { PermissionFlagsBits } = require('discord-api-types/v10');

module.exports = {
	// command definition
	data: new SlashCommandBuilder()
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .setName('ban')
    .setDescription('Bans a user')
    .addUserOption(option => option.setName('target')
      .setDescription('Who needs the hammer of justice?')
      .setRequired(true))
		.addStringOption(option => option.setName('reason')
			.setDescription("Ban reason")
			.setRequired(false))
		.addNumberOption(option => option.setName('purge_duration')
			.setDescription('Duration for deleting messages in days. Default 0 max 7 days')
			.setRequired(false)
			.setMinValue(0)
			.setMaxValue(7)),

	// command execution
	async execute(interaction) {
    command_arguments = interaction.options.data

    target_user = command_arguments[0].member
		ban_reason = command_arguments[1].value
		purge_duration = command_arguments[2].value

		reply = 'banned <@' + target_user.id + '>!'
		if (ban_reason) { reply += "\nReason : " + ban_reason }
		if (purge_duration) { reply += "\nDeleting messages for : " + purge_duration + " days." }

		if (purge_duration) { purge_duration = purge_duration * 24 * 60 * 60 }

		await interaction.reply(reply);
		target_user.ban({ deleteMessageSeconds: purge_duration, reason: ban_reason })
  		.then(console.log)
			.catch(console.error);
		},
};
