// Initialize dotenv
require('dotenv').config();
const token = process.env.CLIENT_TOKEN
// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents  } = require('discord.js');
const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
    ]
})
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

// Log In our bot
client.on('messageCreate', msg => {
// You can view the msg object here with console.log(msg)
 if (msg.content === 'Hello') {
   msg.reply(`Hello ${msg.author.username}`);
   console.log(msg.reply())
   console.log(msg.content)
 }
});
client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });
 client.login(token);
