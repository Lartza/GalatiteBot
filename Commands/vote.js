const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
    message.channel.messages.fetch({limit: 99})
        .then(messages => message.channel.bulkDelete(messages));

    if (args[0] === 'trial') {

        // Get next saturday date
        let s = new Date();
        s.setDate(s.getDate() + (6 - 1 - s.getDay() + 7) % 7 + 1);

        const trials = [
            {name: 'Aetherian Archives', emoji: '😄'},
            {name: 'Hel Ra Citadel', emoji: '🏜️'},
            {name: 'Sanctum Ophidia', emoji: '🐍'},
            {name: 'Maw of Lorkhaj', emoji: '🌑'},
            {name: 'Halls of Fabrication', emoji: '🤖'},
            {name: 'Asylum Sanctorium', emoji: '🔩'},
            {name: 'Cloudrest ', emoji: '🧝‍♂️'},
            {name: 'Sunspire', emoji: '🐲'},
            {name: 'Kyne\'s Aegis', emoji: '🗻'},
        ];

        trials.forEach(t => console.log(t.name, t.emoji))

        let msg = `@everyone Good people of the Galatite Order, the goal of saturdays (${s}) Trial-Run is your decision! :wink: \n Here are your choices:\n\n`;

        for (let t of trials) {
            msg += `[${t.emoji}] ${t.name} \n`
        }

        const filter = (reaction) => {
            return true
        }

        message.channel.send(msg)
            .then(async m => {
                for (const t of trials) {
                    await m.react(t.emoji);
                }

                m.awaitReactions(filter, {time: 1000})
                    .then(collected => {
                        collected.forEach(c => {
                            console.log(c.emoji.name === trials[0].emoji)
                        })
                    });
            })

    }
};