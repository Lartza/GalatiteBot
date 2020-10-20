const fetch = require('node-fetch');
const Discord = require('discord.js');
const { DiscordAPIError } = require('discord.js');

const dayOfWeekAsString = (dayIndex) => {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex];
};

module.exports.run = async(client, message, args) => {
    //if (message.author.id !== '253176948128350208') return;

    //const channel = client.channels.cache.get(config.eventId);

    /*try {
        channel.messages.fetch({limit: 99})
            .then(messages => message.channel.bulkDelete(messages));
    } catch (e) {
        console.error(e)
    }*/

    let embed = new Discord.MessageEmbed() //embed for the Title
        .setColor('#0099ff')
        .setTitle(`Event Plan`)
        .setDescription(`@everyone Dear people of the Galatite Order a new event plan has surfaced for this week.`)

    message.channel.send(embed);

    const result = await fetch('http://galatiteorder.com/api/event-plan').then(res => res.json());

    //channel.send(`@everyone Dear people of the Galatite Order a new event plan has surfaced for this week.`)

    for (let i = 0; i < 7; i++) { //for loop for every day

        console.log(`i = ${i}`);

        let embed = new Discord.MessageEmbed() //embed for the day
            .setColor('#0099ff')
            .setTitle(`On **${dayOfWeekAsString(i)}** we have **${result.eventsPerDay[i + 1]}** ${result.eventsPerDay[i + 1] > 1 ? 'events' : 'event'} planned for you!`) //day

        let events = result.events.splice(0, result.eventsPerDay[i + 1]); //all the events of the day

        for (let j = 0; j < events.length; j++) { //for loop for every event at that day

            console.log(`j = ${j}`);

            let e = events[j]; //event

            embed.addField(`${e.name}`, `At ***${e.time} CEST*** ${e.desc}`, true) //event title, event description

            if (j == (events.length - 1)) //if its the last event of the day
                message.channel.send(embed).then(m => events.forEach(r => m.react(r.reaction))); //add all reactions

        }
        //message.channel.send(embed).then(m => m.react());

        //channel.send(`On **${dayOfWeekAsString(i)}** we have **${result.eventsPerDay[i + 1]}** ${result.eventsPerDay[i + 1] > 1 ? 'events' : 'event'} planned for you!`)
        /*let events = result.events.splice(0, result.eventsPerDay[i + 1]);

        for(let j = 0; j < events.length; j++){

            let e = events[j];

            embed.setDescription(`At ***${e.time} CEST*** ${e.desc}`)
            channel.send(embed).then(m => m.react(e.reaction));

        }*/
        /*embed.setDescription(events.forEach(e => `At ***${e.time} CEST*** ${e.desc}`)).then(emb => channel.send(emb).then())
        events.forEach(e => channel.send(`At ***${e.time} CEST*** ${e.desc}`).then(m => {
            m.react(e.reaction).catch(console.error)
        }))*/
    }
};