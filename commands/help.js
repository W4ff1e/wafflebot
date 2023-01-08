const { SlashCommandBuilder } = require('discord.js');
const { commandHelpWiki } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides a link to the command overview wiki.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply({ content: `[Here is the link to the Github Wiki for commands](${commandHelpWiki})`, ephemeral: true });

    },
};

