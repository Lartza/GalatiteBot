module.exports.run = (client, message, args) => {

    let options = args
    shuffleArray(options);

    console.log(options)

    message.channel.send(`Your dungeon order will be: ***${options}***`)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}