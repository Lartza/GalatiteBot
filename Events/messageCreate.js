import config from '../config.json';
import { react } from '../Jobs/react.js';

export async function messageCreate(client, message) {
    client.config = config;

    const prefix = config.prefix;

    // Ignore bots
    if (message.author.bot) return;

    await react(message);

    // Only listen to commands, ignore normal messages
    if (message.content.indexOf(prefix) !== 0) return;


    // Get the command from the message
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log('Attempting to run command', command);

    // Fetch the executable command from the client
    const cmd = client.commands.get(command);

    if (!cmd) {
        console.log('Command not found');
        return;
    }
    cmd.run(client, message);
}