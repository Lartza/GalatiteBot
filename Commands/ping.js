exports.run = (client, message, args) => {

    let rnd = Math.floor(Math.random() * 100); //generating Random Number
    console.log(rnd);

    const name = message.author.toString(); //getting the name of the writer

    ping(rnd, name); //Its a function for testing purposes. Just insert a number of your choise as rnd


    function ping(rnd, name) {

        //game continious condition
        if (rnd >= 0 && rnd <= 79)
            message.channel.send(`-pong. ${name} hit the ball! :ping_pong:`).catch(console.error);

        else if (rnd == 80)
            message.channel.send(`-PONG! ${name} hit the ball so hard :muscle:, ${name}'s racket broke. But ${name} has a spare racket. \nThe game continues. :ping_pong:`).catch(console.error);

        else if (rnd == 81)
            message.channel.send(`-Plash!... ${name} just used a fish :fish: to hit the ball... Guess that counts. \nThe game continues! :ping_pong:`).catch(console.error);

        //TODO
        /*else if(random == 82)
        message.channel.send(``).catch(console.error);
        
        else if(random == 83)
        message.channel.send(``).catch(console.error);
        
        else if(random == 84)
        message.channel.send(``).catch(console.error);*/


        //winning Conditions
        else if (rnd == 85)
            message.channel.send(`-pong! Dremora invade the earth and everyone was vaporized by Molag Bal :smiling_imp:. \nSince ${name} was the last to hit the ball, ${name} wins by vaporization-elimination! \nCongratulation to ${name}!!! :partying_face:`).catch(console.error);

        else if (rnd == 86)
            message.channel.send(`-Ohh no! ${name} missed. **Puff** It turns out, that ${name} was Sheorogath in disguise the WHOLE TIME! :clown: \nSince Sheo is threatening me with a spoon right now: \n${name} wins!!! :partying_face:`).catch(console.error);

        //TODO
        /*else if(random == 87)
        message.channel.send("").catch(console.error);
        
        else if(random == 88)
        message.channel.send("").catch(console.error);
        
        else if(random == 89)
        message.channel.send("").catch(console.error);*/



        //losing conditions
        else if (rnd >= 90 && rnd <= 99)
            message.channel.send(`Ohh no... ${name} missed. \n${name} is out! :thumbsdown:`).catch(console.error);


        //default condition (just to be sure)
        else message.channel.send(`-pong. ${name} hit the ball! :ping_pong:`).catch(console.error);

    }
};

