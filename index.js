// Initialize a new discord client
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config');
client.config = config;

// Require dependencies
const fs = require('fs');
const Enmap = require('enmap');
const CronJob = require('cron').CronJob;

// Listen to all possible events
fs.readdir("./Events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

// Register all available commands into the client
fs.readdir("./Commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);

        // For now don't register vote
        // if (commandName === 'vote') return;

        client.commands.set(commandName, props);
    });

    console.log('Done')
});

client.on('ready', () => {
    // Create the lore cronjob that fires every
    console.log('Firing up Lore CronJob');

    const LoreJob = new CronJob(
        '1 00 17 * * */2',
        function() {
            console.log('Sending lore message at', Date.now());
            const lore = require('./Jobs/lore');
            lore.run(client, Discord);
        }
    );
    LoreJob.start();

    // const Job = new CronJob(
    //     '1 */1 * * * *',
    //     function () {
    //         console.log('This is running every 1 minute')
    //     }
    // )
});

client.login(config.token);