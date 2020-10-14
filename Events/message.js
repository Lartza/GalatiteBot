module.exports = (client, message) => {

    let prefix = process.env.prefix;

    // Ignore bots
    if (message.author.bot) return;
    // Only listen to commands, ignore normal messages
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // Get the command from the message
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log('Attempting to run command', command);

    // Fetch the executable command from the client
    const cmd = client.commands.get(command);

    if (!cmd) return;
    cmd.run(client, message, args);
};