const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('[ANNA] I am ready to work!');
  console.log('[ANNA] Commands loaded...');
  console.log('		>help');
  console.log('		>restart - owner only command');
  client.user.setGame("ANNA | >help");
});


client.on('message', message => {
  if (message.content === '>help') {
    message.channel.sendMessage('Here are the commands available to you!');
	message.channel.sendMessage('	>help - **Help pages, Your looking at them right now!**');
  }
});
//https://discord.gg/cJnfwNX
//banMember(user, length, callback)
client.on('message', message => {
  if (message.content === '>restart') {
		if(message.author.id === '164192882213912576') {
			message.reply('I have been restarted...');
			console.log('[ANNA] Restarting...');
			setTimeout(restart, 2000);
  } else {
	  message.reply('Im sorry but you are lacking the permission ``BOT.OWNER``');
  }
  }
});

function restart (arg) {
  process.exit();
}
client.on('message', message => {
  if (message.content === '>restart') {
		if(message.author.hasRole('Mod')) {
			message.reply('Banning user...');
			banMember(arg`, 7);
			//
  } else {
	  message.reply('Im sorry but you are lacking the role ``Mod``');
  }
  }
});

client.on('message', message => {
  if (message.content === 'wait') {
    message.reply('Did you know that Alex was a spy?');
  }
});

client.on('message', message => {
  if (message.content === 'Welcome!') {
    message.channel.sendMessage('Welcome!!');
  }
});

client.on('message', message => {
  if (message.content === 'ServerRack') {
    message.channel.sendMessage('Yea! Thanks my creator. Please do not mention him!');
  }
});


client.login('MzIzOTcyOTU2ODYwNzEwOTEz.DCC-4g.SA5TIxDTdAO2HVGmm4I_WO5nTNI');