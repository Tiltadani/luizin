const Discord = require('discord.js');
const bot = new Discord.Client();
const commandsReader = require('./scripts/commandsReader');
const config = require('./config.json');

require('dotenv').config();

bot.login(process.env.TOKEN);

bot.on('ready', () => {
  console.log('Te amo doidinho! Te amo mais chata!');
});

bot.on('message', async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;

  if (msg.content.split('')[0] === config.prefix) {
    const userCommand = msg.content.split(' ')[0];

    const commands = await commandsReader(config.prefix);

    if (!commands[userCommand]) {
      msg.reply(`o comando ${userCommand} não existe!`);
      return;
    }

    commands[userCommand](msg);
  }

  if (msg.content === 'oi') {
    msg.reply('oi cara de boi');
  }
});
