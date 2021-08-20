exports.run = async (client, message) => {

    const getAnswer = async (rnd) => {
        console.log(`rnd=${rnd}`);

        try {
            if (rnd < 85) {
                await message.channel.send(getConAnswer());
            }
            else if (rnd < 90) {
                await message.channel.send(getWinAnswer());
            }
            else if (rnd < 100) {
                await message.channel.send(getLoseAnswer());
            }
            else {
                // Error (should not happen :D)
                console.warn(`Something went wrong. rnd = ${rnd}`);
                await message.channel.send('Something went wrong. I\'m sorry, consult with the bot mender! (but he will probably not care)');
            }
        }
        catch (e) {
            console.error(e);
        }
    };

    const getConAnswer = () => {
        // generating Random Number
        const rnd = Math.floor(Math.random() * 25);
        console.log(`rnd=${rnd}`);

        switch (rnd) {
        case 0:
            return `-PONG! ${name} hit the ball so hard :muscle:, ${name}'s racket broke. But ${name} has a spare racket. \nThe game continues. :ping_pong:`;
        case 1:
            return `-Plash!... ${name} just used a fish :fish: to hit the ball... Guess that counts. \nThe game continues! :ping_pong:`;
        case 2:
            return `-Stop. **Rigurt the Brash** needs ${name}'s help. He ordered fitting Ping-Pong attire. Somehow it never arrived and he needs ${name} to investigate :mag:.\n${name} starts on a quest to find out what happened. \n${name} finds a referee hiding something under the bench. It is a hat with a racket glued to it :tophat: :ping_pong:.\n${name} gives the hat to **Rigurt the Brash** and the game continues!`;
        case 3:
            return `-pong. ${name} hit the ball! :ping_pong:. \nThe ball suddenly turns red :red_circle:. \nThe ball says: "You probably don't recognize me, because of the red arm." \nEveryone keeps playing as if nothing has happened. \nThe game continues. :ping_pong:`;
        case 4:
            return `-PONG!!!! ${name} gets angry and triggers his Super Saiyajin Mode :man_supervillain:. \n${name} almost breaks the table... but the game continues! :ping_pong:`;
        default:
            return `-pong. ${name} hit the ball! :ping_pong:`;
        }
    };

    const getWinAnswer = () => {

        // generating Random Number
        const rnd = Math.floor(Math.random() * 3);
        console.log(`rnd=${rnd}`);

        switch (rnd) {
        case 0:
            return `-pong! Dremora invade the earth and everyone was vaporized by Molag Bal :smiling_imp:. \nSince ${name} was the last to hit the ball, ${name} wins by vaporization-elimination! \nCongratulation to ${name}!!! :partying_face:`;
        case 1:
            return `-Ohh no! ${name} missed. **Puff** It turns out, that ${name} was Sheogorath in disguise the WHOLE TIME! :clown: \nSince Sheo is threatening me with a spoon right now: \n${name} wins!!! :partying_face:`;
        case 2:
            return `0100010001101111001000000111100101101111011101010010000001101011011011100110111101110111001000000110100001101111011101110010000001101100011011110110111001100111001000000100100100100111011101100110010100100000011000100110010101100101011011100010000001101100011011110110111101101011011010010110111001100111001000000110011001101111011100100010000001111001011011110111010100111111 \n...ohh sorry... Did not see you there... I mean: \n-Pong! ${name} wins! :partying_face:`;
        default:
            return `Something went wront. Consult the botmender... But ${name} wins the game!!! :partying_face:`;
        }
    };

    const getLoseAnswer = () => {

        // generating Random Number
        const rnd = Math.floor(Math.random() * 10);
        console.log(`rnd=${rnd}`);

        switch (rnd) {
        case 0:
            return `-Ohh no... ${name} missed. \nLooks like ${name} has taken too much moon sugar :woozy_face:. \n${name} is out! :thumbsdown:`;
        default:
            return `-Ohh no... ${name} missed. \n${name} is out! :thumbsdown:`;
        }
    };


    // Execute
    // getting the name of the writer
    const name = message.author.toString();

    // Its a function for testing purposes. Just insert a number of your choice as rnd
    await getAnswer(Math.floor(Math.random() * 100), message.author.toString());
};