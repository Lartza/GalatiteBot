module.exports.run = async(client, Discord) => {
    // Execute channel finding here

    let channelID = process.env.channelID;

    const channel = client.channels.cache.get(channelID);

    //Send message to stay alive
    channel.send(`I'm alive. (This in necessery for me to stay alive)`);
};