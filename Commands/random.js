export async function run(client, message, args) {

    console.log(args);

    const random = args[Math.floor(Math.random() * args.length)];

    await message.channel.send(`Your random option will be: ***${random}***`);
}