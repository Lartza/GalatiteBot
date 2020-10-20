const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const channel = client.channels.cache.get('640490309150834689');

    let result = await fetch('https://www.reddit.com/r/elderscrollsonline/top/.json?t=day')
        .then(response => response.json());

    let link = result.data.children[0].data.permalink;

    console.log(link);

    result = await fetch('https://www.reddit.com/' + link + ".json")
        .then(response => response.json());

    let data = result[0].data.children[0].data;

    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(data.title)
        .setURL('https://www.reddit.com/' + link)
        .setAuthor('u/' + data.author)
        .setDescription(data.selftext)
        .setImage(data.url_overridden_by_dest)
        .setFooter('This is today\'s top post of /r/elderscrollsonline.');

    channel.send(embed);
}