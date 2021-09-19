export async function react(message) {
    // Ignore bots
    if (message.author.bot) return;

    // get message content
    const content = message.content;

    // helloRegex
    const helloRegex = RegExp(/\b(hello|hi|hey|greetings|good (morning|night|evening|day)|bye)\b/, 'im');
    const notRegex = RegExp(/\b(not|n'?t)\b/, 'im');
    if (!notRegex.test(content) && helloRegex.test(content)) {
        await message.react('👋');
        console.log(`reacted to <${content}> with <wave>`);
    }

    // birthdayRegex
    const birthdayRegex = RegExp(/\bb(irth)?day/, 'im');
    if (birthdayRegex.test(content)) {
        await message.react('🎂');
        console.log(`reacted to <${content}> with <cake>`);
    }
}