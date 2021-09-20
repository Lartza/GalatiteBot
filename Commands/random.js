export async function run(client, message, args) {
    if (args !== undefined) {
        const random = args[Math.floor(Math.random() * args.length)];

        await message.channel.send(`Your random option will be: ***${random}***`);
    }
}