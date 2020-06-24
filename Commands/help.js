const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let embed = new Discord.MessageEmbed()
        .setTitle('Galatite Bot')
        .setDescription('These are all the things I can help you with. A command you can run will always be in a \`code\` block')
        .setColor('#7289DA')
        .addFields(
            [
                {
                    name: 'Ping Pong',
                    value: 'Just for fun. `.ping`'
                },
                {
                    name: 'Trial voting',
                    value: 'This command is used to vote for our weekly trial. You can vote by doing \`.vote {abbreviation}\`'
                },
                {
                    name: 'Random dungeon picker',
                    value: 'This command picks a random dungeon from the given dungeon abbreviations like fg1 or vFG1. You can use this command by doing \`.rd fg1 fg2\`.'
                },
                {
                    name: 'Random dungeon order',
                    value: 'This command is designed for our dungeon grind event. Use this to randomize the order in which dungeons you\'ll run. You can use this command by doing \`.rdo nFG1 vSCP nICP\`'
                },
            ]
        );
    message.channel.send(embed)
}
