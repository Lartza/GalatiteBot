// Initialize a new discord client
const Discord = require('discord.js');
const client = new Discord.Client();

//const config = require('./config');
//client.config = config;

let token = process.env.token;


// Require dependencies
const fs = require('fs');
const Enmap = require('enmap');
//const CronJob = require('cron').CronJob;

const helpers = require('./Modules/helpers');

// Listen to all possible events
fs.readdir("./Events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./Events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

// Register all available commands into the client
helpers.getFiles('./Commands').forEach(file => {
    if (!file.endsWith(".js")) return;

    let props = require(file);
    let commandName = file.split("/");
    commandName = commandName[commandName.length - 1].split('.')[0];

    console.log(`Attempting to load command ${commandName} from dir: ${file}`);

    client.commands.set(commandName, props);
});

console.log('Done')

/*client.on('ready', () => {
    // Create the lore cronjob that fires every
    console.log('Firing up Lore CronJob');

    const LoreJob = new CronJob(
        '1 00 17 * * */
/*2',*/
/*
        function() {
            console.log('Sending lore message at', Date.now());
            const lore = require('./Jobs/lore');
            lore.run(client, Discord);
        }
    );
    LoreJob.start();
});*/

client.on('ready', () => {
    // Create the lore cronjob that fires every
    console.log('Firing up Lore CronJob');

    const LoreJob = new CronJob(
        '* * * * *',

        function() {
            console.log('Staying alive', Date.now());
            const lore = require('./Jobs/stayAlive');
            lore.run(client, Discord);
        }
    );
    LoreJob.start();
});



client.login(token);