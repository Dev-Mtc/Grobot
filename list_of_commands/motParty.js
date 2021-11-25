module.exports = class jeuDeMomots {
  static jeuDeMomots(message, dejaEnCour) {
    //Verifier un channel n'est pas déjà créé au nom des joueurs concerné 
    if (dejaEnCour[0] == null && dejaEnCour[1] == null) {

      //Création du channel avec les permissions !
      message.guild.createChannel(message.author.username, {
        type: 'text', permissionOverwrites: [{
          id: message.guild.id,
          deny: [
            'MANAGE_MESSAGES',
            'SEND_MESSAGES',
            'ADMINISTRATOR',
            'CREATE_INSTANT_INVITE',
            'MENTION_EVERYONE',
            'SEND_TTS_MESSAGES',
            'MANAGE_MESSAGES',
            'MANAGE_ROLES',
            'MANAGE_CHANNELS',
            'MANAGE_WEBHOOKS',
            'ATTACH_FILES',
            'EMBED_LINKS'
          ],
          allow: ['VIEW_CHANNEL', 'ADD_REACTIONS']
        }]
      }, "Jeu").then(channelGamme => {
          
      })
    } else {
      var dejaCree = "Une partie est déjà en cours sur le channel : ";

      if (dejaEnCour[0] == null) {
        message.channel.send(dejaCree + dejaEnCour[1].name)
      } else if (dejaEnCour[1] == null) {
        message.channel.send(dejaCree + dejaEnCour[0].name)
      }
    }
  }
}