'use strict';
/*
To Learn Discord.JS
*/

const {Client, MessageEmbed} = require('discord.js');

const client = new Client();

client.on('ready', () => {
	console.log('I am Ready!');
});
client.on('message', message => {
	if (message.content == 'embed') {
		const embed = new MessageEmbed()
		.setTitle('A Cool Embed')
		.setcolor(0xff0000)
		.setDescription('Hello, When you say "embed" I sent an embed :)')
		message.channel.send(embed);
	}
})
client.login("token")
