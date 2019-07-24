const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603541849973456906")
setInterval(function() {
channel.send(`khaled gamed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);