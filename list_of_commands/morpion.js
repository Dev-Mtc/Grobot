const Discord = require("discord.js");
const config = require("../config.json")

function verifReact(GameVerif) {
  if ((GameVerif[0] == "⭕" && GameVerif[4] == "⭕" && GameVerif[8] == "⭕")) return true;
  else if ((GameVerif[0] == "❌" && GameVerif[4] == "❌" && GameVerif[8] == "❌")) return true;
  else if ((GameVerif[0] == "⭕" && GameVerif[1] == "⭕" && GameVerif[2] == "⭕\n")) return true;
  else if ((GameVerif[0] == "❌" && GameVerif[1] == "❌" && GameVerif[2] == "❌\n")) return true;
  else if ((GameVerif[0] == "⭕" && GameVerif[3] == "⭕" && GameVerif[6] == "⭕"))  return true;
  else if ((GameVerif[0] == "❌" && GameVerif[3] == "❌" && GameVerif[6] == "❌")) return true;
  else if ((GameVerif[2] == "⭕\n" && GameVerif[4] == "⭕" && GameVerif[6] == "⭕")) return true;
  else if ((GameVerif[2] == "❌\n" && GameVerif[4] == "❌" && GameVerif[6] == "❌")) return true;
  else if ((GameVerif[2] == "⭕\n" && GameVerif[5] == "⭕\n" && GameVerif[8] == "⭕")) return true;
  else if ((GameVerif[2] == "❌\n" && GameVerif[5] == "❌\n" && GameVerif[8] == "❌")) return true;
  else if ((GameVerif[1] == "⭕" && GameVerif[4] == "⭕" && GameVerif[7] == "⭕")) return true;
  else if ((GameVerif[1] == "❌" && GameVerif[4] == "❌" && GameVerif[7] == "❌")) return true;
  else if ((GameVerif[3] == "⭕" && GameVerif[4] == "⭕" && GameVerif[5] == "⭕\n")) return true;
  else if ((GameVerif[3] == "❌" && GameVerif[4] == "❌" && GameVerif[5] == "❌\n")) return true;
  else if ((GameVerif[6] == "⭕" && GameVerif[7] == "⭕" && GameVerif[8] == "⭕")) return true;
  else if ((GameVerif[6] == "❌" && GameVerif[7] == "❌" && GameVerif[8] == "❌")) return true;
  else return false;

}
function reloadReact(GameArray) {
  let reload =
    GameArray[0] +
    GameArray[1] +
    GameArray[2] +
    GameArray[3] +
    GameArray[4] +
    GameArray[5] +
    GameArray[6] +
    GameArray[7] +
    GameArray[8];
  return reload;
}
module.exports = class momorpion {

  static collecter(message, versus, dejaEnCour) {

    /* =========================================================Variable globale ========================================================================== */
    var gameMessage = new Array();
    gameMessage[0] = "1️⃣";
    gameMessage[1] = "2️⃣";
    gameMessage[2] = "3️⃣\n";
    gameMessage[3] = "4️⃣";
    gameMessage[4] = "5️⃣";
    gameMessage[5] = "6️⃣\n";
    gameMessage[6] = "7️⃣";
    gameMessage[7] = "8️⃣";
    gameMessage[8] = "9️⃣";
    var gameVierge = reloadReact(gameMessage);
    var xOro = true;
    var joueurAct = (xOro == true ? message.author.id : versus.id)
    var name = message.author.username;
    var compteur = Math.floor(Math.random() * (2));
    console.log(compteur)
    var winner = "Match nul";
    var ItemCollected = 0;
    /* ========================================================= Main programme========================================================================== */

    //Verifier un channel n'est pas déjà créé au nom des joueurs concerné 
    if (dejaEnCour[0] == null && dejaEnCour[1] == null) {

      //Création du channel avec les permissions !
      message.guild.createChannel( name, {
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
      }).then(channelGamme => {
        
        channelGamme.setParent(config.idChanel);
        //Envoi de la partie sur le channel créé
        xOro = compteur == 0 ? true : false;

        channelGamme.send(`${message.member} ⭕  VS ${versus} ❌`);
        channelGamme.send("Premier à jouer : " + (compteur == 0 ? "⭕" : "❌"))
        channelGamme.send(gameVierge).then(msg => {
          msg.react("1️⃣")
            .then(() => msg.react("2️⃣"))
            .then(() => msg.react("3️⃣"))
            .then(() => msg.react("4️⃣"))
            .then(() => msg.react("5️⃣"))
            .then(() => msg.react("6️⃣"))
            .then(() => msg.react("7️⃣"))
            .then(() => msg.react("8️⃣"))
            .then(() => msg.react("9️⃣"))
            .catch(() => console.error("Erreur reaction sur un emoji !"));

          //Filtre de réaction 
          const filtre = (reaction, user) => {
            joueurAct = (xOro == true ? message.author.id : versus.id)
            if (['1️⃣', '2️⃣', '3️⃣', "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"].includes(reaction.emoji.name) && user.id === joueurAct) {
              return ['1️⃣', '2️⃣', '3️⃣', "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"].includes(reaction.emoji.name) && user.id === joueurAct;
            }
          }

          //Création du collecteur !
          const collector = msg.createReactionCollector(filtre, { time: 135000 })


          //Démarrage du collecteur ! 
          collector.on("collect", async (reaction, reactionCollector) => {

            //Attente de réaction sur le message de la partie 
            if (reaction.emoji.name == '1️⃣') {
              if (gameMessage[0] != "⭕" && gameMessage[0] != "❌") {
                
                ItemCollected++;
                gameMessage[0] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '2️⃣') {
              if (gameMessage[1] != "⭕" && gameMessage[1] != "❌") {              
                ItemCollected++;
                gameMessage[1] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '3️⃣') {
              if (gameMessage[2] != "⭕\n" && gameMessage[2] != "❌\n") {
               
                ItemCollected++;
                gameMessage[2] = xOro ? "⭕\n" : "❌\n";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '4️⃣') {
              if (gameMessage[3] != "⭕" && gameMessage[3] != "❌") {              
                ItemCollected++;
                gameMessage[3] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '5️⃣') {
              if (gameMessage[4] != "⭕" && gameMessage[4] != "❌") {  
                ItemCollected++;
                gameMessage[4] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '6️⃣') {
              if (gameMessage[5] != "⭕\n" && gameMessage[5] != "❌\n") {
                ItemCollected++;
                gameMessage[5] = xOro ? "⭕\n" : "❌\n";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '7️⃣') {
              if (gameMessage[6] != "⭕" && gameMessage[6] != "❌") {     
                ItemCollected++;
                gameMessage[6] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '8️⃣') {
              if (gameMessage[7] != "⭕" && gameMessage[7] != "❌") { 
                ItemCollected++;
                gameMessage[7] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            } else if (reaction.emoji.name == '9️⃣') {
              if (gameMessage[8] != "⭕" && gameMessage[8] != "❌") {
                ItemCollected++;
                gameMessage[8] = xOro ? "⭕" : "❌";
                if (xOro == true) {
                  xOro = false;
                } else {
                  xOro = true;
                }
              } else {
                channelGamme.send("Case déjà jouée !")
                reaction.remove((xOro == true ? message.author.id : versus.id));
              }
            }


            var CheckGame = verifReact(gameMessage);
            if (CheckGame == true) {
              winner = (xOro == false ? message.member : versus)
              collector.stop()
            } else {


              gameVierge = await reloadReact(gameMessage);
              if (ItemCollected == 9) {
                collector.stop();
              } else {
                msg.edit(gameVierge);
              }

            }
          })


          //Fin du collecteur de réaction + affichage de fin de partie !
          collector.on("end", collected => {
            console.log(`Collectedd ${collected.size} items`);
            channelGamme.delete();
            gameVierge = reloadReact(gameMessage);
            const Embed = new Discord.RichEmbed()
              .setColor('#0099ff')
              .setTitle('Partie de Momorpion')
              .setDescription(`${message.member} vs ${versus}`)
              .addField(`${gameVierge}`, `Gagnant : ${winner}`)

            message.channel.send(Embed);
          })
        });
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


};
