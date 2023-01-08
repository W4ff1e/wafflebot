const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        // Set the client user's presence
        client.user.setPresence({ activities: [{ name: 'commands! /help', type: ActivityType.Listening }], status: 'Online' });
        console.log('Setting presence.');
    },
};