exports.run = (client, message, args) => {

    let random = Math.floor(Math.random() * 25);

    let m;

    switch (random) {
        case 7 :
            message.channel.send('Out.').catch(console.error);
            message.channel.send('Serving!').catch(console.error);
            break;
        case 14 :
            message.channel.send('Pong!').catch(console.error);
            message.channel.send('Out.').catch(console.error);
            break;
        case 24:
            message.channel.send('Miss.').catch(console.error);
            break;
        default :
            message.channel.send('Pong!').catch(console.error);
    }
};