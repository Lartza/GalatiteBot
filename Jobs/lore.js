const fetch = require('node-fetch');
const config = require('../config');

module.exports.run = async (client, Discord) => {
    // Execute channel finding here
    const channel = client.channels.cache.get(config.loreId);

    // Fetch lore from txt file
    // let array = fs.readFileSync('Lore_Factoids.txt').toString().split('\n').filter(v => v !== '\r');

    // Fetch lore from API
    let {body, type} = await fetch('http://localhost:8000/api/lore-factoid').then(res => res.json());

    // Create embed message for the lore message
    let message;

    if (type === 'snippet') {
        message = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('A new message from Lore Master Braccus of Geldriel has arrived.')
            // .setAuthor('Lore Master Braccus of Geldriel')
            .addField('Dear reader', body)
            .setTimestamp();
    }

    // Send embed message to channel
    channel.send(message);


    // If some says lore in chat hand out a random lore snippet
};