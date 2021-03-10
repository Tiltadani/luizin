const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1};

require('dotenv').config();

bot.login(process.env.TOKEN);

bot.on('ready', () => {
  console.log('Te amo doidinho! Te amo mais chata!');
});

bot.on('message', async msg => {
  if (!message.guild) return;
  if (msg.author.bot) return;
  
  if (msg.content.toLowerCase().startsWith('+play')) {
    let VoiceChannel = msg.guild.channels.cache.find(channel => channel.id === '781668341953069087');
    
    console.log(VoiceChannel);

    if (VoiceChannel == null) {
      console.log('Canal não foi encontrado');
    }

    if (VoiceChannel !== null) {
      console.log('O Canal foi encontrado');

      VoiceChannel.join()
        .then(connection => {
          const stream = ytdl('https://youtu.be/-QdZ2VtOkhc', { filter: 'audioonly'});

          const DJ = connection.play(stream, streamOptions);
          
          DJ.on('end', end => {
            VoiceChannel.leave();
          });
        })
        .catch(console.error);
    }

  }
});
