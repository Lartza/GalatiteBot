module.exports.run = (client, message, args) => {

    console.log(args)

    let random = args[Math.floor(Math.random() * args.length)];

    message.channel.send(`Your random dungeon will be: ***${random}***`)
}
