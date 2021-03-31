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
/////////////////////////////////////////////////////////////
// This is now for webhooks
'use strict';

/**
 * Send a message using a webhook
 */

// Import the discord.js module
const Discord = require('discord.js');
/*
 * Create a new webhook
 * The Webhooks ID and token can be found in the URL, when you request that URL, or in the response body.
 * https://discord.com/api/webhooks/12345678910/T0kEn0fw3Bh00K
 *                                  ^^^^^^^^^^  ^^^^^^^^^^^^ 
 *                                  Webhook ID  Webhook Token
 */
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
hook.send('I am now alive!');
