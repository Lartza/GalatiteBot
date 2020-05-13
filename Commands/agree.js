module.exports.run = (client, message, args) => {
    // Delete message
    message.delete();

    let c = message.guild.roles.cache.find(role => role.name === 'Contemporary');
    // let g = message.guild.roles.cache.find(r => r.name === 'guest');

    // if (!message.member.roles.cache.has(g.id)) return console.log('Already promoted.');

    // message.member.roles.remove(g)
    message.member.roles.add(c);
}