const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]});

client.on('ready', () => {
    console.log("Bot ready!");
});

client.on('messageCreate', async (message) => {
    console.log(message.content);
})

client.login(process.env.TOKEN);