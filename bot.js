require('dotenv').config();
const {Client} = require('discord.js');
const bot = new Client();
bot.on("ready", () =>{
    console.log("Logged in")
})
bot.on("message", (message) =>{
    if (message.author.bot) return;
    const mentionedMembersCollection = message.mentions.members;
    const linux = mentionedMembersCollection.get("540140204909002752");
    if(mentionedMembersCollection.has('540140204909002752') || mentionedMembersCollection.has(bot.user.id)){
        message.reply(` Master ${linux} will catch up with you asap!`);
    }
});
bot.login(process.env.discord_bot_token);

