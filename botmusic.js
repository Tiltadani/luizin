const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');

require('dotenv').config();

bot.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '/join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        
        connection.play(ytdl('https://youtu.be/8-Etf6dSjA4', { filter: 'audioonly' }));
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });

bot.login(process.env.TOKEN);
