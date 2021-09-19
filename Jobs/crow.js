import { MessageEmbed } from 'discord.js';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

import config from '../config';

module.exports.run = async (client) => {

    const channel = client.channels.cache.get('640297840639344641');

    const unsplashAccessKey = config.unsplashAccessKey;

    let embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Ah-Ah-Aaaah')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Corvus_coronoides_-_Doughboy_Head.jpg/220px-Corvus_coronoides_-_Doughboy_Head.jpg')
        .setFooter('-Australian Crow');

    if (unsplashAccessKey !== '') {
        const unsplash = createApi({
            accessKey: unsplashAccessKey,
            fetch: nodeFetch,
        });

        unsplash.photos.getRandom({ query: 'crow' }).then(result => {
            if (result.errors) {
                console.log('error occurred: ', result.errors[0]);
            }
            else {
                const photo = result.response;
                embed = embed
                    .setImage(photo.urls.small)
                    .setDescription(`Photo by [${photo.user.name}](https://unsplash.com/@${photo.user.username}?utm_source=GalatiteBot&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=GalatiteBot&utm_medium=referral)`);
            }
        });
    }

    try {
        await channel.send({ embeds: [embed] });
    }
    catch (e) {
        console.error(e);
    }
};