const clearLastLines = (count) => {
    process.stdout.moveCursor(0, -count);
    process.stdout.clearScreenDown();
};

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            await console.log(`Executing: ${interaction}`);
            await command.execute(interaction);
            // Log the command executed and the user who initiated
            await clearLastLines(1);
            await console.log(`${interaction.user.username} executed: ${interaction}`);
        } catch (error) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(error);
        }
    },
};