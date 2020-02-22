const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix  = process.env.BOT_PREFIX;

bot.on("ready", () => {
    console.log(`I am ready! I am in ${bot.guilds.size} guilds`);

    bot.user.setActivity(process.env.BOT_STATUS);
});


if(command === 'Fuck WH') {
		message.channel.send('FUCKING...');
    msg.edit('Fucked WH');
	}
  
  
bot.login(process.env.BOT_TOKEN);
