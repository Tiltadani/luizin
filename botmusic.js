const Discord = require('discord.js');
const bot = new Discord.Client();

require('dotenv').config();

bot.login(process.env.TOKEN);
