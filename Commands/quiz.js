module.exports.run = (client, message, args) => {

    message.delete();

    let msg = args.join(' ');

    let splitMsg = msg.split(' § ');

    let answeres = splitMsg.slice(1, 4);


    console.log(splitMsg);
    console.log(answeres);
    shuffleArray(answeres);
    console.log(answeres);


    message.channel.send('`' + splitMsg[0] + '`');
    message.channel.send(getGreenText(answeres[0]) + getBlueText(answeres[1]) + getRedText(answeres[2]));
}

const getRedText = (text) => {
    return '```diff\n-<' + text + '>\n```'
}

const getYellowText = (text) => {
    return '```fix\n<' + text + '>\n```'
}

const getGreenText = (text) => {
    return '```diff\n+<' + text + '>\n```'
}

const getBlueText = (text) => {
    return '```ini\n[<' + text + '>]\n```'
}

function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {

        //random number for switch
        const j = Math.floor(Math.random() * (array.length));

        console.log(`rnd = ${j}; ${array[i]} <-> ${array[j]}`);

        //switch
        [array[i], array[j]] = [array[j], array[i]];

        console.log(array);
    }
}