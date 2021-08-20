module.exports.run = (client, message) => {
    if (message.author.id === '232191205700534275') message.channel.send('I understand, Master.');
    else if (message.author.id === '123860541537124354') message.channel.send('Bad Ping-Pong Player.');
    else message.channel.send('Bad Human.');
};