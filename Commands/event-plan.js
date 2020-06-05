const fetch = require('node-fetch');
const config = require('../config');

const dayOfWeekAsString = (dayIndex) => {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex];
};

module.exports.run = async (client, message, args) => {
    if (message.author.id !== '253176948128350208') return;

    const channel = client.channels.cache.get(config.eventId);

    try {
        channel.messages.fetch({limit: 99})
            .then(messages => message.channel.bulkDelete(messages));
    } catch (e) {
        console.error(e)
    }

    const result = await fetch('http://galatiteorder.com/api/event-plan').then(res => res.json());

    channel.send(`@everyone Dear people of the Galatite Order a new event plan has surfaced for this week.`)

    for (let i = 0; i < 7; i++) {
        channel.send(`On **${dayOfWeekAsString(i)}** we have **${result.eventsPerDay[i + 1]}** ${result.eventsPerDay[i + 1] > 1 ? 'events' : 'event'} planned for you!`)
        let events = result.events.splice(0, result.eventsPerDay[i + 1]);
        events.forEach(e => channel.send(`At ***${e.time} CEST*** ${e.desc}`).then(m => {
            m.react(e.reaction).catch(console.error)
        }))
    }
};


