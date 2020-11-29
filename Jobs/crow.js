const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const channel = client.channels.cache.get('640297840639344641');

    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Ah-Ah-Aaaah')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Corvus_coronoides_-_Doughboy_Head.jpg/220px-Corvus_coronoides_-_Doughboy_Head.jpg')
        .setFooter('-Australian Raven');

    channel.send(embed);
}