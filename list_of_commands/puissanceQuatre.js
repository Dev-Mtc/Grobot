const Discord = require("discord.js");
const config = require("../config.json")


function TcheckWin(pion, Tab, points) {
  
  if ((Tab[points + 7] == pion || Tab[points + 7] == pion+"\n")  && (Tab[points + 14] == pion || Tab[points + 14] == pion+"\n") && (Tab[points + 21] == pion || Tab[points + 21] == pion+"\n") ) return true
  else if ((Tab[points - 6] == pion || Tab[points - 6] == pion+"\n") && (Tab[points - 12] == pion || Tab[points - 12] == pion+"\n") && (Tab[points - 18] == pion || Tab[points - 18] == pion+"\n") ) return true
  else if ((Tab[points + 6] == pion || Tab[points + 6] == pion+"\n") && (Tab[points + 12] == pion || Tab[points + 12] == pion+"\n")  && (Tab[points + 18] == pion ||Tab[points + 18] == pion+"\n") ) return true
  else if ((Tab[points - 8] == pion || Tab[points - 8] == pion+"\n") && (Tab[points - 16] == pion || Tab[points - 16] == pion+"\n") && (Tab[points - 24] == pion || Tab[points - 24] == pion+"\n") ) return true
  else if ((Tab[points + 8] == pion || Tab[points + 8] == pion+"\n") && (Tab[points + 16] == pion || Tab[points + 16] == pion+"\n") && (Tab[points + 24] == pion || Tab[points + 24] == pion+"\n")) return true
  else if ((Tab[points + 1] == pion || Tab[points + 1] == pion+"\n") && (Tab[points + 2] == pion || Tab[points + 2] == pion+"\n") && (Tab[points + 3] == pion || Tab[points + 3] == pion+"\n")) {
    if((points) >= 1 && (points + 3)  <= 7 ) return true
    else if((points) >= 8 && (points + 3)  <= 14 ) return true
    else if((points) >= 15 && (points + 3)  <= 21 ) return true
    else if((points) >= 22 && (points + 3)  <= 28 ) return true
    else if((points) >= 29 && (points + 3)  <= 35 ) return true
    else if((points) >= 36 && (points + 3)  <= 42 ) return true
    else return false
  }
  else if ((Tab[points - 1] == pion || Tab[points - 1] == pion+"\n") && (Tab[points - 2] == pion || Tab[points - 2] == pion+"\n") && (Tab[points - 3] == pion || Tab[points - 3] == pion+"\n")) {
    if((points) >= 1 && (points - 3)  <= 7 ) return true
    else if((points) >= 8 && (points - 3)  <= 14 ) return true
    else if((points) >= 15 && (points - 3)  <= 21 ) return true
    else if((points) >= 22 && (points - 3)  <= 28 ) return true
    else if((points) >= 29 && (points - 3)  <= 35 ) return true
    else if((points) >= 36 && (points - 3)  <= 42 ) return true
    else return false
  }
  else if ((Tab[points -6] == pion || Tab[points -6] == pion+"\n") && (Tab[points + 6] == pion || Tab[points + 6] == pion+"\n") && (Tab[points + 12] == pion || Tab[points + 12] == pion+"\n") ) return true
  else if ((Tab[points + 6] == pion || Tab[points + 6] == pion+"\n") && (Tab[points - 6] == pion || Tab[points - 6] == pion+"\n") && (Tab[points - 12] == pion || Tab[points - 12] == pion+"\n") ) return true
  else if ((Tab[points + 8] == pion || Tab[points + 8] == pion+"\n") && (Tab[points - 8] == pion || Tab[points - 8] == pion+"\n") && (Tab[points - 16] == pion || Tab[points - 16] == pion+"\n") ) return true
  else if ((Tab[points - 8] == pion || Tab[points - 8] == pion+"\n") && (Tab[points + 8] == pion || Tab[points + 8] == pion+"\n") && (Tab[points + 16] == pion || Tab[points + 16] == pion+"\n") ) return true
  else if ((Tab[points - 1] == pion || Tab[points - 1] == pion+"\n") && (Tab[points + 1] == pion || Tab[points + 1] == pion+"\n") && (Tab[points + 2] == pion || Tab[points + 2] == pion+"\n") ) {
    if((points - 1) >= 1 && (points + 2) <= 7 ) return true
    else if((points - 1) >= 8 && (points + 2)  <= 14 ) return true
    else if((points - 1) >= 15 && (points + 2)  <= 21 ) return true
    else if((points - 1) >= 22 && (points + 2)  <= 28 ) return true
    else if((points - 1) >= 29 && (points + 2) <= 35 ) return true
    else if((points - 1) >= 36 && (points + 2)  <= 42 ) return true
    else return false
  }
  else if ((Tab[points + 1] == pion || Tab[points + 1] == pion+"\n") && (Tab[points - 1] == pion || Tab[points - 1] == pion+"\n") && (Tab[points - 2] == pion || Tab[points - 2] == pion+"\n") ) {
    if((points + 1) >= 1 && (points - 2) <= 7 ) return true
    else if((points + 1) >= 8 && (points - 2)  <= 14 ) return true
    else if((points + 1) >= 15 && (points - 2)  <= 21 ) return true
    else if((points + 1) >= 22 && (points - 2)  <= 28 ) return true
    else if((points + 1) >= 29 && (points - 2) <= 35 ) return true
    else if((points + 1) >= 36 && (points - 2)  <= 42 ) return true
    else return false
  }
  else { return false }

}

module.exports = class puissanceQuatre {

  static p4Game(message, versus, dejaEnCour) {

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

        channelGamme.setParent(config.idChanel);


        var Tab = new Array();
        var PuissanceTableau = "";
        var TcheckGameState = false;
        var Gagnant;
        var nbJouer = 0;
        var player = Math.floor(Math.random() * (2));
        console.log(player)
        for (var i = 1; i < 44; i++) {

          if (i == 7 || i == 14 || i == 21 || i == 28 || i == 35 || i == 42) {
            Tab[i] = "⚪\n";
          } else if (i == 43) {
            Tab[i] = "1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣";
          } else {
            Tab[i] = "⚪";
          }
          PuissanceTableau += Tab[i];
        }

        channelGamme.send(`${message.member}🔴  VS ${versus}🔵 `);
        channelGamme.send(`Premier à jouer : ${player == 1 ? message.member+'🔴' : versus+'🔵'}`)
        channelGamme
          .send(PuissanceTableau)
          .then(msg => {
            msg
              .react("1️⃣")
              .then(() => msg.react("2️⃣"))
              .then(() => msg.react("3️⃣"))
              .then(() => msg.react("4️⃣"))
              .then(() => msg.react("5️⃣"))
              .then(() => msg.react("6️⃣"))
              .then(() => msg.react("7️⃣"))
              .catch(() => console.error("Erreur reaction sur un emoji !"));

            
            var joueurAct;

            const filtre = (reaction, user) => {
              joueurAct = player == 1 ? message.author.id : versus.id;
              if (
                ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"].includes(
                  reaction.emoji.name
                ) &&
                user.id == joueurAct
              ) {
                return (
                  ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"].includes(
                    reaction.emoji.name
                  ) && user.id == joueurAct
                );
              }
            };


            const collector = msg.createReactionCollector(filtre, {
              time: 13500000
            });


            collector.on("collect", (reaction, reactionCollector) => {
              collector.setMaxListeners(42)

              nbJouer++;

              if (reaction.emoji.name == "1️⃣") {
                if (Tab[36] == "⚪") {
                  Tab[36] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 36);
                } else if (Tab[29] == "⚪") {
                  Tab[29] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 29);
                } else if (Tab[22] == "⚪") {
                  Tab[22] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 22);
                } else if (Tab[15] == "⚪") {
                  Tab[15] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 15);
                } else if (Tab[8] == "⚪") {
                  Tab[8] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 8);
                } else if (Tab[1] == "⚪") {
                  Tab[1] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 1);
                } else {
                  channelGamme.send("Colonne remplie");
                }

              } else if (reaction.emoji.name == "2️⃣") {
                if (Tab[37] == "⚪") {
                  Tab[37] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 37);
                } else if (Tab[30] == "⚪") {
                  Tab[30] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 30);
                } else if (Tab[23] == "⚪") {
                  Tab[23] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 23);
                } else if (Tab[16] == "⚪") {
                  Tab[16] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 16);
                } else if (Tab[9] == "⚪") {
                  Tab[9] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 9);
                } else if (Tab[2] == "⚪") {
                  Tab[2] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 2);
                } else {
                  channelGamme.send("Colonne remplie");
                }
              } else if (reaction.emoji.name == "3️⃣") {
                if (Tab[38] == "⚪") {
                  Tab[38] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 38);
                } else if (Tab[31] == "⚪") {
                  Tab[31] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 31);
                } else if (Tab[24] == "⚪") {
                  Tab[24] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 24);
                } else if (Tab[17] == "⚪") {
                  Tab[17] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 17);
                } else if (Tab[10] == "⚪") {
                  Tab[10] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 10);
                } else if (Tab[3] == "⚪") {
                  Tab[3] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 3);
                } else {
                  channelGamme.send("Colonne remplie");
                }
              } else if (reaction.emoji.name == "4️⃣") {
                if (Tab[39] == "⚪") {
                  Tab[39] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 39);
                } else if (Tab[32] == "⚪") {
                  Tab[32] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 32);
                } else if (Tab[25] == "⚪") {
                  Tab[25] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 25);
                } else if (Tab[18] == "⚪") {
                  Tab[18] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 18);
                } else if (Tab[11] == "⚪") {
                  Tab[11] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 11);
                } else if (Tab[4] == "⚪") {
                  Tab[4] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 4);
                } else {
                  channelGamme.send("Colonne remplie");
                }
              } else if (reaction.emoji.name == "5️⃣") {
                if (Tab[40] == "⚪") {
                  Tab[40] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 40);
                } else if (Tab[33] == "⚪") {
                  Tab[33] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 33);
                } else if (Tab[26] == "⚪") {
                  Tab[26] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 26);
                } else if (Tab[19] == "⚪") {
                  Tab[19] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 19);
                } else if (Tab[12] == "⚪") {
                  Tab[12] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 12);
                } else if (Tab[5] == "⚪") {
                  Tab[5] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 5);
                } else {
                  channelGamme.send("Colonne remplie");
                }
              } else if (reaction.emoji.name == "6️⃣") {
                if (Tab[41] == "⚪") {
                  Tab[41] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 41);
                } else if (Tab[34] == "⚪") {
                  Tab[34] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 34);
                } else if (Tab[27] == "⚪") {
                  Tab[27] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 27);
                } else if (Tab[20] == "⚪") {
                  Tab[20] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 20);
                } else if (Tab[13] == "⚪") {
                  Tab[13] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 13);
                } else if (Tab[6] == "⚪") {
                  Tab[6] = player == 1 ? "🔴" : "🔵";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 6);
                } else {
                  channelGamme.send("Colonne remplie");
                }
              } else if (reaction.emoji.name == "7️⃣") {
                if (Tab[42] == "⚪\n") {
                  Tab[42] = player == 1 ? "🔴\n" : "🔵\n";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 42);
                } else if (Tab[35] == "⚪\n") {
                  Tab[35] = player == 1 ? "🔴\n" : "🔵\n";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 35);
                } else if (Tab[28] == "⚪\n") {
                  Tab[28] = player == 1 ? "🔴\n" : "🔵\n";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 28);
                } else if (Tab[21] == "⚪\n") {
                  Tab[21] = player == 1 ? "🔴\n" : "🔵\n";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 21);
                } else if (Tab[14] == "⚪\n") {
                  Tab[14] = player == 1 ? "🔴\n" : "🔵\n";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 14);
                } else if (Tab[7] == "⚪\n") {
                  Tab[7] = player == 1 ? "🔴\n" : "🔵\n";
                  TcheckGameState = TcheckWin(player == 1 ? "🔴" : "🔵", Tab, 7);

                } else {
                  channelGamme.send("Colonne remplie");
                }
              }

              console.log("Resultat du pion tenté : "+ TcheckGameState)
              reaction.remove(player == 1 ? message.author.id : versus.id);

              PuissanceTableau = "";
              for (var i = 1; i < 44; i++) { PuissanceTableau += Tab[i]; }
              if (TcheckGameState || nbJouer == 42) { 
                if(nbJouer == 42) Gagnant = "Match Nul";
                else Gagnant = player == 1 ? message.author : versus;       
                collector.stop(); 
              }

              (player == 1 ? player = 2 : player = 1);
              msg.edit(PuissanceTableau);



            });

             collector.on("end", collected => {
             channelGamme.delete(); 
              const Embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Partie de Puissance 4')
                .setDescription(`${message.member} vs ${versus}`)
                .addField(`${PuissanceTableau}`, `Gagnant : ${Gagnant} ${player == 1 ? "🔴" : "🔵"}`)

              message.channel.send(Embed);
            });

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
