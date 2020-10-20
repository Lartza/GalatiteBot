module.exports = (message) => {

    var level = [
        ['10', '🥳'],
        ['20', '🥳'],
        ['30', '🥳'],
        ['40', '🥳'],
        ['50', '🥳'],
    ]

    if (message.author.id == '159985870458322944') {
        level.forEach(element => {
            if (content.includes(element[0])) {
                message.react(element[1]);
                console.log(element[0] + " " + content);
            }
        });
    }

    // Ignore bots
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    var items = [
        ['hello', '👋'],
        ['greetings', '👋'],
        ['morning', '🌅'],
        ['night', '🌃'],
        ['bye', '👋'],
        ['haha', '🤣'],
        ['funny', '🤣'],
        ['sad', '😢']
    ];

    items.forEach(element => {
        if (content.includes(element[0])) {
            if (content.includes('not') || content.includes('isnt') || content.includes('isn\'t') || content.includes('wasnt') || content.includes('wasn\'t')) return;
            message.react(element[1]);
            console.log(element[0] + " " + content);
        }
    });




};