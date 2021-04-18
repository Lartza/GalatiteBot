module.exports.run = (client, message, args) => {
    message.delete();

    const channel = client.channels.cache.get('652564165994610688');
    const name = message.author.toString();
    const username = message.author.username;

    console.log(`Trying to make ${username} ${name} a <Discord-Bound>`);

    if (message.member.roles.cache.some(role => role.name === 'Discord-Bound')) return;

    let role = message.guild.roles.cache.find(role => role.name === 'Discord-Bound');
    message.member.roles.add(role);

    channel.send(`Greetings! Welcome to the Galatite Order! ${name}, take a look around. There is always someone to help ! We hope you'll have a majestic time here.`)

    console.log(`${username} ${name} is now a <Discord-Bound>`);
}