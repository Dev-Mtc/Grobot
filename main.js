/* =========================================================Require ========================================================================== */
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })



const config = require("./config.json");
const morpion = require("./list_of_commands/morpion");
const helper = require("./list_of_commands/helper")
const motParty = require("./list_of_commands/motParty")
const puissanceQuatre = require("./list_of_commands/puissanceQuatre")


// =========================================================Fonctions ========================================================================== */

//Function de recupération de la mention 
function getUserByMention(mention) {
  if (!mention) return;

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1);

    if (mention.startsWith('!')) {
      mention = mention.slice(1);
    }

    return client.users.cache.get(mention);
  }
}

/* =========================================================Fonctions Bot ========================================================================== */
//Preparation du Bot !
client.on("ready", () => {
  console.log("Ready !");
  client.user.setActivity("Prefix : " + config.prefix);
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

//Fonction discord permettant d'écouter les messages entrant !
client.on("message", async message => {

 

  if (message.content.startsWith(config.prefix + "setprefix")) {
    const arguments = message.content.slice(config.prefix.length);
    console.log(arguments);
    const Args = arguments.split(/ +/);
    const command = Args[0];
    const Split = Args.slice(1);
    const prefix = Split[0];
  }

  //Verifier si le message commence par le prefix du bot !
  if (message.content.startsWith(config.prefix)) {

    //Verifier si le message comporte suffix Game  !
    if (message.content.startsWith(config.prefix + "morp") || message.content.startsWith(config.prefix + "morpion")) {

      //Verifier si la partie à bien était lancée  !
      if (message.content.startsWith(config.prefix + "morp") || message.content.startsWith(config.prefix + "morpion") && message.content.endsWith(">")) {

        //Verifier si la partie n'a pas était lancée avec le Bot   !
        if (!message.content.startsWith(config.prefix + "morp <@!" + client.user.id) || message.content.startsWith(config.prefix + "morpion <@!" + client.user.id) && message.content.endsWith(">")) {

          //Verifier si la partie n'a pas était lancée avec soit même
          //if (!message.content.startsWith(config.prefix + "morp <@!" + message.member.id) || message.content.startsWith(config.prefix + "morpion <@!" + message.member.id) && message.content.endsWith(">")) {
          const arguments = message.content.slice(config.prefix.length);
          const splitArgs = arguments.split(/ +/);
          const command = splitArgs[0];
          //const nbPartie = splitArgs[2];
          const args = splitArgs.slice(1);
          var versus = getUserByMention(args[0]);
          var name = message.author.username;
          var FindChannel = new Array();


          message.channel.send(versus + ", " + message.member + " te défie au morpion !").then(async msg => {
            msg
              .react("✅")
              .then(() => msg.react("❌"))
              .then(() => {
                const filtre = (reaction, user) => {
                  return ['✅', '❌'].includes(reaction.emoji.name) && user.id === versus.id;
                }
                msg.awaitReactions(filtre, { max: 1, time: 60000 }).then(async (e) => {

                  const reactionRecu = e.first();
                  if (reactionRecu.emoji.name == '✅') {
                    FindChannel[0] = await client.channels.find("name", name.toLowerCase());
                    FindChannel[1] = await client.channels.find("name", versus.username.toLowerCase());

                    morpion.collecter(message, versus, FindChannel);
                    msg.delete();
                  } else {
                    message.reply(versus.username + " a rejeté le défi du morpion !")
                    msg.delete();
                  }

                })
                  .catch(err => {
                    msg.delete();
                    message.reply("le temps d'acceptation s'est écoulé !")
                  })
              })
          });



          // } else {
          //   message.reply("Trouve toi un pote pour jouer bro ");
          // }

        } else {
          message.reply("Je ne suis pas une intelligence artificielle pour pouvoir jouer avec toi ")
        }

      } else {
        message.reply("Ce n'est pas la bonne syntaxe (&game @____) ")
      }
    } else if (message.content.startsWith(config.prefix + "p4")) {

      //Verifier si la partie à bien était appelé  !
      if (message.content.startsWith(config.prefix + "p4 ") && message.content.endsWith(">")) {

        //Verifier si la partie n'a pas était lancée avec le Bot   !
        if (!message.content.startsWith(config.prefix + "p4 <@!" + client.user.id) && message.content.endsWith(">")) {
          const arguments = message.content.slice(config.prefix.length);
          const splitArgs = arguments.split(/ +/);
          const command = splitArgs[0];
          //const nbPartie = splitArgs[2];
          const args = splitArgs.slice(1);
          var versus = getUserByMention(args[0]);
          var name = message.author.username;
          var FindChannel = new Array();

          message.channel.send(versus + ", " + message.member + " te défie au Puissance 4 !").then(async msg => {
            msg
              .react("✅")
              .then(() => msg.react("❌"))
              .then(() => {
                const filtre = (reaction, user) => {
                  return ['✅', '❌'].includes(reaction.emoji.name) && user.id === versus.id;
                }
                msg.awaitReactions(filtre, { max: 1, time: 60000 }).then(async (e) => {

                  const reactionRecu = e.first();
                  if (reactionRecu.emoji.name == '✅') {
                    FindChannel[0] = await client.channels.find("name", name.toLowerCase());
                    FindChannel[1] = await client.channels.find("name", versus.username.toLowerCase());

                    puissanceQuatre.p4Game(message, versus, FindChannel);
                    msg.delete();
                  } else {
                    message.reply(versus.username + " a rejeté le défi du Puissance 4 !")
                    msg.delete();
                  }

                })
                  .catch(err => {
                    msg.delete();
                    message.reply("le temps d'acceptation s'est écoulé !")
                  })
              })
          });

        } else {
          message.reply("Je ne suis pas une intelligence artificielle pour pouvoir jouer avec toi ")
        }

      } else {
        message.reply("Ce n'est pas la bonne syntaxe (&p4 @____) ")
      }
    } else if (message.content.startsWith(config.prefix + "mot")) {
      message.channel.send("Une MotParty débute dans une minute, pour rejoindre la partie faites : join").then(() => {
        var participant = new Array();

        function VerifParticipant(participants) {
          for (var i = 0; i < participant.length; i++) {
            if (participant[i] == participants) return true
          }
        }
        const filtre = response => {
          if (response.content.toLowerCase() === "join") {
            if (!VerifParticipant(response.author.id)) {
              participant.push(response.author.id)
              return response.content.toLowerCase() === "join";
            } else {
              message.channel.send(response.author + " vous participez déjà !")
            }
            console.log(participant)
          }
        }


        message.channel.awaitMessages(filtre, { max: 10, time: 60000, errors: ['time'] })
          .then(() => {
            console.log(participant)

          })
          .catch(() => {
            message.channel.send("Error")
          });
      })
    } else if (message.content.startsWith(config.prefix + "help")) {
      helper.helper(message);
    } else if (message.content.startsWith(config.prefix + "lg")) {
      //message.channel.send("En cours de dev", {files: ["../client v1.2/images/Loup.png"]})

      var Participants = new Array();
      var nbParticipant = 0;
      message.channel.send(message.member + " lance une partie de Loup garou ! ✅ Pour participer").then(async msg => {
        msg
          .react("✅")
          .then(() => msg.react("▶"))
          .then(() => {
            const filtre = (reaction, user) => {
              if (['✅'].includes(reaction.emoji.name)) {
                return ['✅'].includes(reaction.emoji.name);
              } else if (['▶'].includes(reaction.emoji.name) && user.id === message.author.id) {
                return ['▶'].includes(reaction.emoji.name);
              }

            }
            msg.awaitReactions(filtre, { max: 2, time: 60000 }).then(async (e) => {

              const reactionRecu = e.first();
              if (reactionRecu.emoji.name == '✅') {
                Participants[nbParticipant] = reactionRecu.users[1].user.id;
                console.log(Participants[nbParticipant]);
                nbParticipant++;
              } else if (reactionRecu.emoji.name == '▶') {
                console.log("Start");
              }
            })
              .catch(err => {
                msg.delete();
                message.reply("le temps d'acceptation s'est écoulé !")
              })


          })
      });
    } else if (message.content.startsWith(config.prefix + "join")) {

      if (message.member.voiceChannelID == null) {
        message.reply("Tu dois rejoindre un channel pour utiliser cette fonction !");
        return;
      }
      message.member.voiceChannel.join()
        .then(connection => {
          //console.log(connection);
          
          try {
            connection.on("speaking", (user, speaking) => {
              
              const readable = connection.receiver.createStream(user, { mode: 'pcm' });
              //readable.pipe(fs.createWriteStream('user_audio'));
              console.log(speaking)
              
              connection.play(new Silence(), { type: 'opus' });
            });
          } catch (e) {
            console.log(e)
            connection.disconnect();
          }
        });

    } 
  }else if (message.content.startsWith("<@!" + client.user.id)) {
      message.reply("Mon prefix est " + config.prefix)
  }
});

//Connecter le bot
client.login(config.token);
