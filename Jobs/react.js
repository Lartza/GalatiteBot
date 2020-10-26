module.exports = (message) => {

    // Ignore bots
    if (message.author.bot) return;

    //get message content
    const content = message.content.toLowerCase();

    //list of items to react to
    var items = [
        ['hello', '👋'],
        ['hi ', '👋'],
        [' hey ', '👋'],
        ['greetings', '👋'],
        ['good morning', '👋'],
        ['good night', '👋'],
        ['bye', '👋'],
        ['birthday', '🎂'],
    ];

    //for each element from items
    items.forEach(element => {
        if (content.includes(element[0])) { //if message includes word
            //exclude messages with variation of not
            if (content.includes('not ') || content.includes('nt ') || content.includes('n\'t ')) return;
            message.react(element[1]); //react with emoji
            console.log('found <' + element[0] + '> in <' + content + '>');
        }
    });

    //react to sheo with ping pong emoji always
    if (message.author.id == '123860541537124354') message.react('🏓');

};