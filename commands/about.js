const { SlashCommandBuilder } = require('discord.js');
const { developmentGuildInvite } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Provides information about the bot.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`I was made by [BLD] Waffle#1816 and licensed under Apache-2.0 for public use!\nYou can get help and send suggestions in our development/support server found [here](${developmentGuildInvite})`);
    },
};
