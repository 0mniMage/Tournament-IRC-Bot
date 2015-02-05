//standard config stuff

var config = {
channels: ["#TeamIce"],
server: "irc.ygopro.us",
botName: "Mokuba"
};

var irc = require("irc");
console.log("Getting Mokuba...");
var bot = new irc.Client(config.server, config.botName, 
{channels: config.channels
});

//actual tournament sign-up process
console.log("Who's ready to duel!");
//gonna need an array to save the info, maybe make name shorter?

var tourneylist = [];

//user commands to join it, lots of choices = catering to lax spelling/grammar users

bot.addListener("message", function(from, to, message) {
if (message.indexOf('join tourney') > -1
  || message.indexOf('Join tourney') > -1
  || message.indexOf('Join Tourney') > -1
  || message.indexOf('Join tournament') > -1
  || message.indexOf('Join Tournament') > -1
  )
  {
tourneylist[tourneylist.length] = message.from;
bot.say(from, "Thanks for signing up!");
}});

//read back input to tourney organizer (me?)

var tourneyindex;
for (tourneyindex = 0; tourneyindex < tourneylist.length; index++) {
    text += tourneylist[tourneyindex];
    }
bot.addListener('pm', function(nick, message) {
    if (nick = "OmniMage" && message = "dump the list")
     console.log(tourneylist.length, tourneyindex);
});

//todo list: prevent people from entering tournament multiple times, validation process (valid deck, etc; prob in another file), swiss match assignment function (yay more shitty computer rng), blacklist for people who are not allowed to play in tournaments for w.e reason