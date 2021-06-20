const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let embed = new Discord.MessageEmbed()
        .setTitle('Galatite Bot')
        .setDescription('These are all the things I can help you with. A command you can run will always be in a \`code\` block')
        .setColor('#7289DA')
        .addFields(
            [{
                    name: 'Ping Pong',
                    value: 'Just for fun. `.ping`'
                },
                {
                    name: 'Random',
                    value: 'This command picks a random option of the ones given. Especially useful to decide which dungeon to run next. You can use this command by typing \`.random option1 option2 option3\`'
                },
                {
                    name: 'Random order',
                    value: 'This command is picks a random order. You can use this command to randomize the order in which dungeons will be run. You can use this command by doing \`.random_order option1 option2 option3\`'
                },
                {
                    name: 'Roll',
                    value: 'This command picks a random number from 1 to 100 if written without parameters. If written with parameters returns a random number from min to max. You can use this command by doing \`.roll\` or \`.roll min max\`'
                },
                {
                    name: 'Emote',
                    value: 'This command lets you "perform" an emote. You can use this command by doing \`.emote emoteText\` for example \`.emote is really shocked\`'
                },
                {
                    name: 'Butt',
                    value: 'This command gives you an positive, neutral or negative answer on your question. You can use this command by doing \`.butt question\`'
                }
            ]
        );
    message.channel.send(embed)
}