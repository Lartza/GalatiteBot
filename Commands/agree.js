module.exports.run = (client, message, args) => {
    message.delete();

    const channel = client.channels.cache.get('652564165994610688');
    const name = message.author.toString();
    const username = message.author.username;

    console.log(`Trying to make ${username} ${name} a <New Arrival>`);

    if (message.member.roles.cache.some(role => role.name === 'New Arrival')) return;

    let role = message.guild.roles.cache.find(role => role.name === 'New Arrival');
    message.member.roles.add(role);

    channel.send(`Greetings! Welcome to the Galatite Order! ${name}, take a look around. There is always someone to help ! We hope you'll have a majestic time here.`)

    console.log(`${username} ${name} is now a <New Arrival>`);
}