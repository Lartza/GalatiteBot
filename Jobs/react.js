module.exports = (message) => {

    // Ignore bots
    if (message.author.bot) return;

    //get message content
    let content = message.content;

    //helloRegex
    const helloRegex = RegExp(/\b(hello|hi|hey|greetings|good (morning|night|evening|day)|bye)\b/, 'im');
    const notRegex = RegExp(/\b(not|n\'?t)\b/, 'im');
    if (!notRegex.test(content) && helloRegex.test(content)) {
        message.react('👋');
        console.log(`reacted to <${content}> with <wave>`)
    }

    //birthdayRegex
    const birthdayRegex = RegExp(/\bb(irth)?day/, 'im');
    if (birthdayRegex.test(content)) {
        message.react('🎂');
        console.log(`reacted to <${content}> with <cake>`)
    }

    //react to sheo with ping pong emoji always
    if (message.author.id == '123860541537124354') message.react('🏓');

};