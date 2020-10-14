module.exports.run = (client, message, args) => {

    let options = args
    shuffleArray(options);

    console.log(options)

    message.channel.send(`Your dungeon order will be: ***${options}***`)
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