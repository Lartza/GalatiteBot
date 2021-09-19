export async function run(client, message) {
    if (message.author.id === '232191205700534275') await message.channel.send('I understand, Master.');
    else if (message.author.id === '123860541537124354') await message.channel.send('Bad Ping-Pong Player.');
    else await message.channel.send('Bad Human.');
}