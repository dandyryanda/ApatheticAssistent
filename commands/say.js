const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if (message.author.id !== '454709798433325089') return 
  var botmessage = args.join(" ");

  if (!botmessage) {

   message.channel.send(":s*: Usage : say <message>");
  
   message.delete();

    return;

  }

  message.delete();

  message.channel.send(botmessage);

}

exports.conf = {

  aliases: ['s']

}

exports.help = {

  name: 'say',

  description: 'Makes Bot Say Something',

  usage: 'say [message]'

};
