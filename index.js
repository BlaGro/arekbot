const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} jest online`);

  bot.user.setActivity("co robi Arek | a!pomoc", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === `${prefix}lenny`){
    return message.channel.send("")
  }

  if(cmd === `${prefix}zapros`){

    let embed = new Discord.RichEmbed()
    .setDescription("Dodaj mnie na serwer")
    .setColor("#4286f4")
    .addField("Dodaj mnie!", `${message.author.username} dodaj mnie tym linkiem https://discordapp.com/api/oauth2/authorize?client_id=475726670049837057&permissions=8&scope=bot`)
    message.channel.send(embed);
  }

  if(cmd === `${prefix}pomoc`){

    let embed = new Discord.RichEmbed()
    .setDescription("Pomocnik")
    .setColor("#4286f4")
    .addField("a!bot - Info o bocie")
    .addField("a!zapros - Zaproś mnie na serwer :)")
    .addField("Narazie tyle")
    message.author.send(embed);
  }

  if(cmd === `${prefix}bot`){

    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setDescription("Info o bocie")
    .setColor("#15f153")
    .addField("Nazwa bota", bot.user.username)
    .addField("Ostatnia wiadomość", bot.user.lastMessage || "Brak")
    .addField("TAG", bot.user.tag)
    .addField("ID ostatniej wiadomości", bot.user.lastMessageID || "Brak")
    .addField("ID Avataru", bot.user.avatar)
    message.channel.send(botEmbed);
  }

});

bot.login(process.env.BOT_TOKEN);
