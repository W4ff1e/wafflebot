const fs = require('node:fs');
// const path = require('node:path');

const exists = function(filepath) {
    try {
        fs.access(filepath);
        return true;
    } catch {
        return false;
    }
};

if (!exists('config.json')) {
    fs.copyFile('config.json.template', 'config.json', (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('Created config file.');
} else {
    console.log('Config file exists!');
}

let { token, clientId, guildId, developmentGuildInvite, developmentGuildName, commandHelpWiki, botOwnerId } = require('./config.json');

const checkEnvVar = function(envVar, jsonVar) {
    // First make sure process.env.token is not null;
    if (envVar == 'PLACEHOLDER') {
        // now we check if the JSON file was filled out if the envVar wasn't.
        if (jsonVar != 'your-token-goes-here') {
            return jsonVar;
        } else {
            console.log('Invalid Config Conditions! Please ensure you have the proper environment variables specified! Exiting...');
            process.exit(9);
        }
    } else {
        // Please implement: https://stackoverflow.com/a/28175137
        return envVar;
    }
};

token = checkEnvVar(process.env.token, token);
clientId = checkEnvVar(process.env.clientId, clientId);
botOwnerId = checkEnvVar(process.env.botOwnerId, botOwnerId);



console.log(`Token Environment Variable: ${process.env.token}`); b
console.log(`Used Token: ${token}`);

console.log(`clientId Environment Variable: ${process.env.clientId}`); b
console.log(`Used clientId: ${clientId}`);

console.log(`botOwnerId Environment Variable: ${process.env.botOwnerId}`); b
console.log(`Used botOwnerId: ${botOwnerId}`);
