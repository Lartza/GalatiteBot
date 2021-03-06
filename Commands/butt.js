export async function run(client, message) {

    // Define all possible functions
    const getAnswer = async (rnd) => {
        console.log(`rnd=${rnd}`);
        try {
            if (rnd < 10) {await message.channel.send(getPositiveAnswer());}
            else if (rnd < 15) {await message.channel.send(getNeutralAnswer());}
            else if (rnd < 20) {await message.channel.send(getNegativeAnswer());}
            else {
                console.warn(`Something went wrong. rnd = ${rnd}`);
                await message.channel.send('Something went wrong. I\'m sorry, consult with the bot mender!');
            }
        }
        catch (e) {
            console.error(e);
        }
    };

    const getPositiveAnswer = () => {
        const rnd = Math.floor(Math.random() * 10);

        console.log(`rnd=${rnd}`);

        switch (rnd) {
        case 0: return 'It is certain.';
        case 1: return 'It is decidedly so.';
        case 2: return 'Without a doubt.';
        case 3: return 'Yes - definitely.';
        case 4: return 'You may rely on it.';
        case 5: return 'As I see it, yes.';
        case 6: return 'Most likely.';
        case 7: return 'Outlook good.';
        case 8: return 'Yes.';
        case 9: return 'Signs point to yes.';
        default: {
            console.warn(`Something went wrong. rnd = ${rnd}`);
            return 'Something went wrong. I\'m sorry, consult with the bot mender!';
        }
        }
    };

    const getNeutralAnswer = () => {
        const rnd = Math.floor(Math.random() * 5);

        console.log(`rnd=${rnd}`);

        switch (rnd) {
        case 0: return 'Reply hazy, try again.';
        case 1: return 'Ask again later.';
        case 2: return 'Better not tell you now.';
        case 3: return 'Cannot predict now.';
        case 4: return 'Concentrate and ask again.';
        default: {
            console.warn(`Something went wrong. rnd = ${rnd}`);
            return 'Something went wrong. I\'m sorry, consult with the bot mender!';
        }
        }
    };

    const getNegativeAnswer = () => {
        const rnd = Math.floor(Math.random() * 5);

        console.log(`rnd=${rnd}`);

        switch (rnd) {
        case 0: return 'Don???t count on it.';
        case 1: return 'My reply is no.';
        case 2: return 'My sources say no.';
        case 3: return 'Outlook not so good.';
        case 4: return 'Very doubtful.';
        default: {
            console.warn(`Something went wrong. rnd = ${rnd}`);
            return 'Something went wrong. I\'m sorry, consult with the bot mender!';
        }
        }
    };

    // Execute
    await getAnswer(Math.floor(Math.random() * 20));
}