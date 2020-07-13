exports.run = (client, message, args) => {

    let random = Math.floor(Math.random() * 25); //generating Random Number
    let name = message.author.username; //getting the name of the writer

    switch (random) {
        case 0: //User misses
            message.channel.send("Ohh no... " + name + " missed. " + name + "is out!").catch(console.error);
            break;
        default:    //User hits the ball
            message.channel.send("-pong. " + name + " hit the ball!").catch(console.error);
            break;
    }
};