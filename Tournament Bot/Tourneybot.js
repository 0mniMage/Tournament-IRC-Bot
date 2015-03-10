/*jslint node:true*/
//standard config stuff

var config = {
    channels: ["#TeamIce"],
    server: "irc.ygopro.us",
    botName: "Mokuba"
};

var irc = require("irc");
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

//actual tournament sign-up process

var tourneylist = [];
var blacklist = []; //add bad people to this list

bot.addListener("pm", function (nick, message) {
    "use strict";
    if (nick === "OmniMage") {
        blacklist[blacklist.length] = message.split(" ")[1];
    }
});
//user commands to join it, lots of choices = catering to lax spelling/grammar users; checks for legality and previous sign-ups.

bot.addListener("message", function (from, to, message) {
    "use strict";
    if (message.indexOf('join tourney') > -1 
        || message.indexOf('Join tourney') > -1 
        || message.indexOf('Join Tourney') > -1 
        || message.indexOf('Join tournament') > -1 
        || message.indexOf('Join Tournament') > -1) {
        if (blacklist.indexOf() > -1) {
            if (tourneylist.indexOf() > -1) {
                bot.say(from, "You've already signed up silly!");
            } else {
                bot.say(from, "What are you trying to pull buddy? You're not allowed to play!");
            }
        } else {
            tourneylist[tourneylist.length] = message.from;
            bot.say(from, "Thanks for signing up!");
        }
    }
});

//read back input to tourney organizer (me?)

bot.addListener('pm', function (nick, message) {
    'use strict';
    if (nick === "OmniMage" && message === "Dump the tourneylist") {
        console.log(tourneylist.length, tourneylist);
    }
});

bot.addListener('pm', function (nick, message) {
    'use strict';
    if (nick === "OmniMage" && message === "Dump the blacklist") {
        console.log(blacklist.length, blacklist);
    }
});

//End sign-ups

//bot.addListener('pm', function (nick, message) {
//   'use strict';
//    if (nick === "OmniMage" && message === "Stop") {
//        console.log(tourneylist.length, tourneyindex);
//      bot.removeListener(all);
//    }
//});

//Generate seeds for swiss

//(SeedGen () {
//  'use strict';
//var seeds;
//  var shuffle = require('knuth-shuffle').knuthShuffle
//    ,tourneylist
//    ,seeds
//    ;
//  seeds = shuffle(tourneylist.slice(0));
//  console.log(seeds);
//}());

//to-do list: validation process (valid deck, etc; prob in another file), swiss match assignment function (yay more shitty computer rng), listener for tournament boot, better method of list dumping (Security issues mentioned by Star before he left)

//use Readline to secure list functions to a prompt only (person in charge) can access
//
//var readline = require('readline');
//var list = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});

//list.question('Would you like the blacklist or the tourneylist dumped?', 
//    if (answer === "Blacklist")
//        list.write(blacklist)
//    if (answer === "Tourneylist")
//        list.write(tourneylist)
//    else list.close();
        