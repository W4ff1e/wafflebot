const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! logged in as ${client.user.tag}`);
        // Set the client user's presence
        client.user.setPresence({ activities: [{ name: 'for commands! /help', type: ActivityType.Watching }], status: 'Online' });
        console.log('Setting presence.');
    },
};