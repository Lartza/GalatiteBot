// Initialize a new discord client
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config');
client.config = config;

// Require dependencies
const fs = require('fs');
const Enmap = require('enmap');
const CronJob = require('cron').CronJob;

const SendLore = () => {
    // Execute channel finding here
    const channel = client.channels.cache.get(config.loreId);

    // Fetch lore from txt file
    let array = fs.readFileSync('Lore_Factoids.txt').toString().split('\n').filter(v => v !== '\r');

    // Create embed message for the lore message
    const message = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('A new message from Lore Master Celarus has arrived.')
        // .setAuthor('Lore Master Celarus')
        .addField('Dear reader,', array[Math.floor(Math.random() * array.length)])
        .setTimestamp();

    // mention everyone
    channel.send('@everyone');

    // Send embed message to channel
    channel.send(message);
};

// Listen to all possible events
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

// Register all available commands into the client
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.on('ready', () => {
    // Create the lore cronjob that fires every
    const LoreJob = new CronJob(
        '*/10 * * * * 2,4,6',
        function() {
            console.log('Sending lore message');
            SendLore();
        }
    );
    LoreJob.start();
});

client.login(config.token);