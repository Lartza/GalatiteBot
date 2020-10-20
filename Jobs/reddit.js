const fetch = require('node-fetch');

module.exports.run = async(client, message, args) => {

    const channel = client.channels.cache.get('640490309150834689');

    const result = await fetch('https://www.reddit.com/r/elderscrollsonline/top/.json?t=day')
        .then(response => response.json());

    let children = result.data.children[0].data.permalink;

    console.log(children);

    channel.send('https://www.reddit.com' + children);
}