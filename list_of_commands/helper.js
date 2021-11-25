const Discord = require("discord.js");

module.exports = class helper {
  static helper(message) {
    var notice = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setTitle('Notice MomoBot')
      .setDescription(`
    Morpion : &morp @ 
    Puissance 4 : &p4 @`
    )
      .setTimestamp();

    message.channel.send(notice);

  }
}