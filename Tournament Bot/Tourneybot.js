/*jslint node:true*/
//standard config stuff

var config = {
    channels: ["#TeamIce"],
    server: "irc.ygopro.us",
    botName: "Mokuba"
};

var irc = require("irc");
console.log("Getting Mokuba...");
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

//actual tournament sign-up process
console.log("Who's ready to duel!");

var tourneylist = [];
var blacklist = []; //add bad people to this list
//bot.addListener("pm", function (nick, message) {
//    "use strict";
//   if (nick === "OmniMage" && message === "unsure what to put here atm") }
//user commands to join it, lots of choices = catering to lax spelling/grammar users; checks for legality and previous sign-ups.

bot.addListener("message", function (from, to, message) {
    "use strict";
    if (message.indexOf('join tourney') > -1 || message.indexOf('Join tourney') > -1 || message.indexOf('Join Tourney') > -1 || message.indexOf('Join tournament') > -1 || message.indexOf('Join Tournament') > -1) {
        if (blacklist.indexOf(from) > -1) {
            if (tourneylist.indexOf(from) > -1) {
                bot.say(from, "You've already signed up silly!"); } else bot.say(from, "What are you trying to pull buddy? You're not allowed to play!"); } else {tourneylist[tourneylist.length] = message.from;
        bot.say(from, "Thanks for signing up!");
        }
    }
});

//read back input to tourney organizer (me?)

var tourneyindex;
for (tourneyindex = 0; tourneyindex < tourneylist.length; tourneyindex++) {
    text += tourneylist[tourneyindex];
}
bot.addListener('pm', function (nick, message) {
    'use strict';
    if (nick === "OmniMage" && message === "dump the list") {
        console.log(tourneylist.length, tourneyindex);
    }
});

//bot.addListener(boot for tournament goes here)

//to-do list: validation process (valid deck, etc; prob in another file), swiss match assignment function (yay more shitty computer rng), complete blacklist function, listener for tournament boot