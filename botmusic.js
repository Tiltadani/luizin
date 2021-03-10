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
  if (!msg.guild) return;
  if (msg.author.bot) return;
  
  if (msg.content.toLowerCase().startsWith('+play')) {
    if (!msg.member.voice.channel) {
      msg.reply('Você precisa entrar em um canal de voz para poder usar o bot!');
      return;
    }

    const connection = await msg.member.voice.channel.join();

    const stream = ytdl('https://youtu.be/-QdZ2VtOkhc', { filter: 'audioonly'});
    const DJ = connection.play(stream, streamOptions);

    DJ.on('end', end => {
      VoiceChannel.leave();
    });

  }
});
