const ytdl = require('ytdl-core');
const request = require('request-promise');

module.exports = async ( msg ) => {
    const voiceChannel = msg.member.voice.channel;

    const link = msg.content.split(' ')[1];
    let linkExists = true;

    await request.get(link)
        .catch(error => {
            msg.reply('esse link não é válido!');
            linkExists = false;
        });
    
    if (!linkExists) return;

    voiceChannel.join()
        .then(connection => {
            connection.play(ytdl(link), {filter: 'audioonly', seek: 0, volume: 1});
        
            /*connection.on('error', error => {
                msg.reply('esse link não é válido!');
                console.log(error);
            });*/
        });
}