'use strict';

function toBase(num, base) {

    let symbols = "012345689abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let num1 = num.split("");
    let conversion = "";
    let val;
    let total = 0;

    if (base > symbols.length || base <= 1) return false;

    for (let i = 0; i < num.length; i++) {
        val = symbols.indexOf(num1[i]);
        total += ((val % base) * Math.pow(10, i)) + (Math.floor(val / base) * Math.pow(10, i + 1));
    }
    return parseInt(total);
}

exports.commands = {

    shipudden: 'ship',
    shippuden: 'ship',
    shippudden: 'ship',
    shipping: 'ship',
    ship: function(target, user, room, connection) {


        if (!this.runBroadcast()) return;

        let name = toId(target);

        if (!target) return this.parse('/help ship');


        name = toBase(name, 20);
        let match = (name) % 101;


        this.sendReplyBox("<h3>Shipping Results for " + target + "</h3> It seems the ship <i>" + target + "</i> has a viability of " + match + "/100!");

    },
    shiphelp: ["/ship [ship name] - Rates the ship out of 100"],

    illuminati: function(target, user, room, connection) {

        if (!this.runBroadcast()) return;

        if (!target) return this.parse('/help illuminati');

        let name = toId(target);
        name = toBase(name, 10);
        let match = (name) % 101;

        this.sendReplyBox('<h3>Running Reptilian Module</h3><h4>Running Scanners</h4><br>The chances of <i>' + target + "</i> being in the Illuminati are " + match + "%");

    },
    illuminatihelp: ["/illuminati [name] - Tells you how likely a person is to be in the Illuminati!"],

    saltmeter: function(target, user, room, connection) {

        if (!this.runBroadcast()) return;

        if (!target) return this.parse("/help saltmeter");

        let name = toId(target);
        name = toBase(name, 10);
        let match = (name) % 130;

        this.sendReplyBox("<i>" + target + '</i> is ' + match + "% salty!");

    },
    saltmeterhelp: ["/saltmeter [name] - Shows you how salty someone or something is!"],

    pair: function(target, user, room, connection) {

        let naem = target.split(", ");
        let name = target.split(", ");

        console.log(name[0] + " " + name[1])
        if (!this.runBroadcast()) return;

        if (!name[0] || !name[1]) return this.parse("/help pair");
        name[0] = toId(toBase(name[0], 10));
        name[1] = toId(toBase(name[1], 10));
        let match = (name[0] + name[1]) % 101;
        console.log(name[0] + " " + name[1])


        if (match <= 30 && match >= 11) {

            this.sendReplyBox('<div style="padding: 4px, 6px;background-color: crimson; color: white;"><font size="4">Name 1: </font> ' + naem[0] + "<br><br>" +
                '<font size="4">Name 2: </font> ' + naem[1] + '</div><div style="padding: 4px, 6px;background-color: white; color: black;"><font size="4">' +
                'Match:</font> ' + match + "%" + '</div><div style="padding: 4px, 6px;background-color: rgb(20, 20, 20); color: white;">' +
                "Well, I'm sorry to say that this relationship doesn't stand too high of a chance of surviving. Though I'm sure with a little bit of hard work, determination and perseverance that you could both make it work!</div>");
        } else if (match > 30 && match <= 60) {

            this.sendReplyBox('<div style="padding: 4px, 6px;background-color: crimson; color: white;"><font size="4">Name 1:</font> ' + naem[0] + "<br><br>" +
                '<font size="4">Name 2:</font> ' + naem[1] + '</div><div style="padding: 4px, 6px;background-color: white; color: black;"><font size="4">' +
                'Match:</font> ' + match + "%" + '</div><div style="padding: 4px, 6px;background-color: rgb(20, 20, 20); color: white;">' +
                "I would say that this relationship is average to above average overall. It has decent chances of survival but could use a little more work to ensure that it stays strong. Try to employ a little bit more tact and communication in your relationship to help it grow and blossom into something beautiful!</div>");
        } else if (match > 60 && match <= 90) {

            this.sendReplyBox('<div style="padding: 4px, 6px;background-color: crimson; color: white;"><font size="4">Name 1:</font> ' + naem[0] + "<br><br>" +
                '<font size="4">Name 2:</font> ' + naem[1] + '</div><div style="padding: 4px, 6px;background-color: white; color: black;"><font size="4">' +
                'Match:</font> ' + match + "%" + '</div><div style="padding: 4px, 6px;background-color: rgb(20, 20, 20); color: white;">' +
                "Wow! This relationship is clearly working. You should both continue to do whatever it is that you're doing, that's not to say that it isn't without a few kinks here and there, but you both should try your best to work through them and continue a strong and healthy relationship!</div>");
        } else if (match > 90 && match <= 99) {

            this.sendReplyBox('<div style="padding: 4px, 6px;background-color: crimson; color: white;"><font size="4">Name 1:</font> ' + naem[0] + "<br><br>" +
                '<font size="4">Name 2:</font> ' + naem[1] + '</div><div style="padding: 4px, 6px;background-color: white; color: black;"><font size="4">' +
                'Match:</font> ' + match + "%" + '</div><div style="padding: 4px, 6px;background-color: rgb(20, 20, 20); color: white;">' +
                "Holy Smokes! This relationship is almost perfect. I'm sure that Minnie and Mickey envy this relationship. You both must be the talk of the town wherever you go! You guys rock for having such an awesome and inspiring relationship. Woo Hoo!</div>");
        } else if (match >= 100) {

            this.sendReplyBox('<div style="padding: 4px, 6px;background-color: crimson; color: white;"><font size="4">Name 1:</font> ' + naem[0] + "<br><br>" +
                '<font size="4">Name 2:</font> ' + naem[1] + '</div><div style="padding: 4px, 6px;background-color: white; color: black;"><font size="4">' +
                'Match:</font> ' + match + "%" + '</div><div style="padding: 4px, 6px;background-color: rgb(20, 20, 20); color: white;">' +
                "Amazing! This relationship is perfect, you guys already know that don't you? There's no need for my advice here. Congratulations.</div>");
        } else if (match <= 10) {

            this.sendReplyBox('<div style="padding: 4px, 6px;background-color: crimson; color: white;"><font size="4">Name 1:</font> ' + naem[0] + "<br><br>" +
                '<font size="4">Name 2:</font> ' + naem[1] + '</div><div style="padding: 4px, 6px;background-color: white; color: black;"><font size="4">' +
                'Match:</font> ' + match + "%" + '</div><div style="padding: 4px, 6px;background-color: rgb(20, 20, 20); color: white;">' +
                "Welp, this relationship is clearly dead in the water, you might want to abandon ship as soon as possible and go your seperate ways!");
        }

    },

    pairhelp: ["/pair [name 1], [name2] - Shows you how successful a relationship is out of 100% [Btw Im Lazy so please use ``, `` - The space is super fucking important!! >:(]"],

    groups: function(target, room, user) {
        if (!this.runBroadcast()) return;
        this.sendReplyBox("<b>Normal PS Ranks</b><br><br><b>~ Admins</b> - Administrators can do anything they like with the server, including abuse /a commands, promote / demote users, they have free reign over what happens here. Although abuse will result in SysOps, removing an admin.<br><b># Room Owner</b> - Room Owners have the highest authority in a room that they own and almost have full control over it.<br><b>& Leader</b> - Leaders have all the powers of a Moderator  and they can promote people to moderators, roomowners. They can also force ties with battles and use /declare to show images and tell the server things.<br><b>@ Moderator</b> - They have all the power of a driver and they can ban users, nothing really more to say about this rank, its not that interesting imo, its a  glorified driver :v<br><b>% Driver</b> - They have all the powers of a Voice as well as the power to mute and warn users in rooms. Global driver can also lock users and check for alts as well as IPs.<br><b>+ Voice</b> - Able to use broadcastable commands and speak through Modchat (+ / ac)! This rank is usually rewarded to users who have shown they can be a positive presence and help out the server where they can!<br><br><b>Ironic Special Ranks!</b><br><br><b> &nbsp;SysOp</b> - System Operators or SysOps are the next level above an Admin, these gus are the ones who have true power over the server, with the ability to change coding at will, eval battles and eval chats, so don't fuck with these guys<br><b>♥ Server Kitty</b> - This rank is awarded to only one user at a time, the user who is the cutest and most hepful user on the server usually, so uhh, make sure you pay respect to these guys, or else!<br><b>- Server Bot</b> - This rank is for trusted and official Server bots, so if a bot does not have this next to their name, then they are unlicenced and should be approached with caution!");

    },
    groupshelp: ["/groups - Explains what the + % @ # & next to people's names mean.",
        "!groups - Shows everyone that information. Requires: + % @ # & ~"
    ],
};