const { SlashCommandBuilder } = require('discord.js');
const { botOwnerId } = require('../config.json');

// Needed for the wait function
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms.`);
        if (sent.createdTimestamp - interaction.createdTimestamp > 1000) {
            await interaction.client.users.send(botOwnerId, `I am currently experiencing high ping as reported by: ${interaction.user.username} from the /ping command`);
            await wait(500);
            await interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms.\nThe high latency (>1000ms) has been reported to the Bot Owner.`);
        }
    },
};