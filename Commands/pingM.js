exports.run = (client, message, args) => {

    let random = Math.floor(Math.random() * 100); //generating Random Number
    let name = message.author.toString(); //getting the name of the writer


    //game continious condition
    if(random >= 0 && random <= 79)
    message.channel.send("-pong. " + name + " hit the ball!").catch(console.error);

    else if(random == 80)
    message.channel.send("-PONG! " + name + " hit the ball so hard, " + name + "'s racket broke. But " + name + " has a spare racket. The game continues.").catch(console.error);

    else if(random == 81)
    message.channel.send("-Plash!... " + name + " just used a fish to hit the ball... Guess that counts. The game continues!").catch(console.error);

    //TODO
    /*else if(random == 82)
    message.channel.send("").catch(console.error);

    else if(random == 83)
    message.channel.send("").catch(console.error);

    else if(random == 84)
    message.channel.send("").catch(console.error);*/


    //winning Conditions
    else if(random == 85)
    message.channel.send("-pong! Dremora invade the earth and everyone was vaporized by Molag Bal. Since " + name + " was the last to hit the ball, " + name + " wins by vaporization-elimination! Congratulation to " + name + "!!!").catch(console.error);

    else if(random == 86)
    message.channel.send("-Ohh no! " + name + " missed. *Puff* It turns out, that " + name + " was Sheorogath in disguise the WHOLE TIME! Since Sheo is threatening me with a spoon right now: " + name + "(Sheo) wins!!")

    //TODO
    /*else if(random == 87)
    message.channel.send("").catch(console.error);

    else if(random == 88)
    message.channel.send("").catch(console.error);

    else if(random == 89)
    message.channel.send("").catch(console.error);*/
    


    //losing conditions
    else if(random >= 90 && random <= 99)
    message.channel.send("Ohh no... " + name + " missed. " + name + " is out!").catch(console.error);
    

    //default condition
    else message.channel.send("-pong. " + name + " hit the ball!").catch(console.error);
};