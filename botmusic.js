const Discord = require('discord.js');
const bot = new Discord.Client();

require('dotenv').config();

bot.on('message', msg => {
    console.log(msg.content);

    if (msg.content === "oi") {
        msg.reply("Que foi mané?");
    }
})

bot.login(process.env.TOKEN);
