module.exports.run = (client, message, args) => {
    message.delete();

    let c = message.guild.roles.cache.find(role => role.name === 'New Arrival');
    message.member.roles.add(c);
}