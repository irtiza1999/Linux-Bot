require('dotenv').config();
const {Client} = require('discord.js');
const bot = new Client();

bot.on("message", (message) =>{
    if (message.author.bot) return;
    const mentionedMembersCollection = message.mentions.members;
    const linux = mentionedMembersCollection.get("540140204909002752");
    if(mentionedMembersCollection.has('540140204909002752') || mentionedMembersCollection.has(bot.user.id)){
        message.reply(` Master ${linux} will catch up with you asap!`);
    }
});

bot.on("message", (message) =>{
    if (message.author.bot) return;
    const mentionedMembersCollection = message.mentions.members;
    const wolves = mentionedMembersCollection.get("535461330140921857");
    if(mentionedMembersCollection.has('535461330140921857') || mentionedMembersCollection.has(bot.user.id)){
        message.reply(`${wolves} will catch up with you asap!`);
    }
});
bot.on("message", (message) =>{
    if (message.author.bot) return;
    const mentionedMembersCollection = message.mentions.members;
    const fallen = mentionedMembersCollection.get("610521079990976548");
    if(mentionedMembersCollection.has('610521079990976548') || mentionedMembersCollection.has(bot.user.id)){
        message.reply(`${fallen} will catch up with you asap!`);
    }
});


bot.login(process.env.discord_bot_token);

