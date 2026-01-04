const { Events, GuildMember } = require('discord.js');

module.exports = {
  // event definition
	name: Events.GuildMemberUpdate,

  // event execution
	execute(old_member, new_member) {
		console.log(old_member.pending)
		console.log(new_member.pending)

		const role_manager = new_member.roles

		if (new_member.pending == false) {
			role_manager.add("1457399131705442417")
			role_manager.add("1457399183886647511")
		}
	},
};
