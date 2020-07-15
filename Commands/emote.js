const Discord = require('discord.js');

exports.run = (client, message, args) => {

    //get the content of the emote
    let emoteContent = message.content.split(".emote")[1];
    //get the name of the sender
    const name = message.author.toString();
    console.log(`Emote Sender = "${name}" Emote Content = "${emoteContent}"`);

    //delete the message
    message.delete();

    //create the fake emote
    let embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setDescription(`${name} ${emoteContent}`);

    //send fake emote
    message.channel.send(embed).catch(console.error);
}