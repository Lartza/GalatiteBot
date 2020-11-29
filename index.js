// Initialize a new discord client
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config');
client.config = config;

let token = config.token;


// Require dependencies
const fs = require('fs');
const Enmap = require('enmap');
const CronJob = require('cron').CronJob;

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

client.on('ready', () => {
    // Create the lore cronjob that fires every
    console.log('Firing up Reddit CronJob');

    const RedditJob = new CronJob(
        '0 16 * * *',

        function() {
            console.log('Sending reddit post at', Date.now());
            const redditJob = require('./Jobs/reddit');
            redditJob.run(client, Discord);
        }
    );
    RedditJob.start();


    console.log('Firing up Crow CronJob');

    const CrowJob = new CronJob(
        '30 12 * * *',

        function() {
            console.log('Sending crow post at', Date.now());
            const crowJob = require('./Jobs/crow');
            crowJob.run(client, Discord);
        }
    );
    CrowJob.start();
});



client.login(token);