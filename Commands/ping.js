exports.run = (client, message, args) => {

    let random = Math.floor(Math.random() * 10);

    let m = random === 7 ? 'Out.' : 'Pong!';

    message.channel.send(m).catch(console.error)
};