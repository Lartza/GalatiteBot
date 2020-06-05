const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    message.delete();

    const trials = [
        {name: 'Aetherian Archives', abr: 'AA', emoji: '🧙‍♂️', votes: []},
        {name: 'Hel Ra Citadel', abr: 'HRC', emoji: '🏜️', votes: []},
        {name: 'Sanctum Ophidia', abr: 'SO', emoji: '🐍', votes: []},
        {name: 'Maw of Lorkhaj', abr: 'MOL', emoji: '🌑', votes: []},
        {name: 'Halls of Fabrication', abr: 'HOF', emoji: '🤖', votes: []},
        {name: 'Asylum Sanctorium', abr: 'AS', emoji: '🔩', votes: []},
        {name: 'Cloudrest ', abr: 'CR', emoji: '🧝‍♂️', votes: []},
        {name: 'Sunspire', abr: 'SS', emoji: '🐲', votes: []},
        {name: 'Kyne\'s Aegis', abr: 'KA', emoji: '🗻', votes: []},
    ];

    console.log(args)

    // Voting for trial
    if (args[0] === 'trial' && args[1] === 'end') {
        if (message.author.id !== '253176948128350208') return;

        let rawData = fs.readFileSync('voting.json');
        let voting = JSON.parse(rawData);

        let winner = [];
        for (let trial of voting.trial) {

            if (winner.length === 0) {
                winner.push(trial)
            }

            if (winner[0].votes.length < trial.votes.length) {
                winner[0] = trial
            }
        }

        voting.trialVotingOpen = true;

        let data = JSON.stringify(voting, null, 2);
        fs.writeFileSync('voting.json', data);

        return message.channel.send(`@everyone The voting has stopped. And the trial for next saturday will be: ***${winner[0].name}*** \n \n Chose your desired role in the Trial-event-talk channel now!`)
    }

    if (args[0] === 'trial') {
        if (message.author.id !== '253176948128350208') return;

        // Get next saturday date
        let s = new Date();
        s.setDate(s.getDate() + (6 - 1 - s.getDay() + 7) % 7 + 1);

        let rawData = fs.readFileSync('voting.json');
        let voting = JSON.parse(rawData);

        voting.trial = trials

        voting.trialVotingOpen = true;

        let data = JSON.stringify(voting, null, 2);
        fs.writeFileSync('voting.json', data);

        // fs.writeFileSync('voting.json', voting);

        let msg = `@everyone Good people of the Galatite Order, the goal of saturdays (${s.getDate()}-${s.getMonth()}-${s.getFullYear()}) Trial-Run is your decision! :wink: \n Here are your choices:\n\n`;

        for (let t of trials) {
            msg += `${t.emoji} ${t.name} [${t.abr}] \n`
        }

        msg += '\n You can vote by doing \`.vote {abbreviation}\` in chat.';

        return message.channel.send(msg)
        // return message.channel.send(msg).then(msg => {
        //     trials.forEach(trial => msg.react(trial.emoji))
        // })
    }

    if (trials.some(trial => trial.abr === args[0].toUpperCase())) {
        console.log(message.author.username)
        let rawData = fs.readFileSync('voting.json');
        let voting = JSON.parse(rawData);

        if (voting.trialVotingOpen) {
            voting.trial.forEach(trial => {
                if (trial.abr === args[0].toUpperCase()) {
                    if (trial.votes.includes(message.author.username)) {
                        return message.channel.send('You can not vote twice for the same trial.')
                            .then(msg => msg.delete({timeout: 3000}))
                    }
                    trial.votes.push(message.author.username);

                    message.channel.send('Vote registered!').then(msg => {
                        msg.delete({timeout: 3000})
                    })
                }
            });

            let data = JSON.stringify(voting, null, 2);
            fs.writeFileSync('voting.json', data);
        } else {
            message.channel.send(`Sorry! There is no active vote.`)
        }
    }
};