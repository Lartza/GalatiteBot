// Initialize a new discord client
import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

import config from './config.json';
client.config = config;

const token = config.token;

// Require dependencies
import { CronJob } from 'cron';
import * as redditJob from './Jobs/reddit.js';
import * as crowJob from './Jobs/crow.js';

// Listen to all possible events
import { messageCreate } from './Events/messageCreate.js';
client.on('messageCreate', messageCreate.bind(null, client));

// Register all available commands into the client
client.commands = new Map();

import * as agree from './Commands/agree.js';
client.commands.set('agree', agree);
import * as butt from './Commands/butt.js';
client.commands.set('butt', butt);
import * as emote from './Commands/emote.js';
client.commands.set('emote', emote);
import * as help from './Commands/help.js';
client.commands.set('help', help);
import * as ping from './Commands/ping.js';
client.commands.set('ping', ping);
import * as random from './Commands/random.js';
client.commands.set('random', random);
import * as random_order from './Commands/random_order.js';
client.commands.set('random_order', random_order);
import * as roll from './Commands/roll.js';
client.commands.set('roll', roll);

console.log('Done');

client.on('ready', () => {
    // Create the lore cronjob that fires every
    console.log('Firing up Reddit CronJob');

    const RedditJob = new CronJob(
        '0 16 * * *',

        async function() {
            console.log('Sending reddit post at', Date.now());
            await redditJob.run(client);
        },
    );
    RedditJob.start();


    console.log('Firing up Crow CronJob');

    const CrowJob = new CronJob(
        '30 12 * * *',

        async function() {
            console.log('Sending crow post at', Date.now());
            await crowJob.run(client);
        },
    );
    CrowJob.start();
});


client.login(token).catch(e => console.error(e));