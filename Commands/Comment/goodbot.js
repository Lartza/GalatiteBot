export async function run(client, message) {
    if (message.author.id === '232191205700534275') await message.channel.send('Thank you, Master.');
    else await message.channel.send('Thank you.');
}