import fetch from 'node-fetch';
import { MessageEmbed } from 'discord.js';

const fetchPost = async () => {
    const feed = await fetch('https://www.reddit.com/r/elderscrollsonline/top/.json?t=day');
    const feed_json = await feed.json();
    const link = await feed_json.data.children[0].data.permalink;

    const post = await fetch('https://www.reddit.com' + link + '.json');
    const json = await post.json();
    const data = await json[0].data.children[0].data;

    if (data.selftext.length > 2045) {
        data.selftext = data.selftext.substring(0, 2044) + '...';
    }
    return data;
};

export async function run(client) {

    const channel = client.channels.cache.get('640490309150834689');
    try {
        const data = await fetchPost();

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(data.title)
            .setURL('https://www.reddit.com' + data.permalink)
            .setAuthor('u/' + data.author)
            .setDescription(data.selftext)
            .setImage(data.url_overridden_by_dest)
            .setFooter('This is today\'s top post of /r/elderscrollsonline.');

        await channel.send({ embeds: [embed] });
    }
    catch (e) {
        console.error(e);
    }
}