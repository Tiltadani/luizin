module.exports = async ( msg ) => {
    if (!msg.member.voice.channel) {
        msg.reply('Você precisa entrar em um canal de voz para poder usar o bot!');
        return;
    }

    await msg.member.voice.channel.join();
}