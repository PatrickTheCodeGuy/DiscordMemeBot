const Discord = require("discord.js");
const client = new Discord.Client();
const Token = "NTI5MDk2ODIwMDg5OTQ2MTIy.Dwr30w.cVYLtG1KTe2Dg_1CEuB2E5SpWJ4";

client.login(Token);

client.on("message", message => {
  let myRole = message.guild.roles.find(
    role => role.name === "Community Manager"
  );

  if (
    message.content === "@everyone" ||
    message.content === "@channel" ||
    message.content === "@here"
  ) {
    if (message.member.roles.has(myRole.id)) {
    } else {
      const messageArray = [
        "*TIPS FEDORA* M'lady requests that you dont do that without permission",
        "*TIPS FEDORA* You are dumber than you seem https://tenor.com/view/are-you-stupid-stupid-gordon-ramsay-gif-4618432",
        "*TIPS FEDORA* Dont @ everyone you peasent",
        "*TIPS FEDORA* Yall reckon you got some brain cells in there?",
        "https://tenor.com/view/permission-dont-have-permission-no-permission-gif-12128480",
        "https://tenor.com/view/no-gif-11926715",
        "https://tenor.com/view/batman-nonono-nope-cartoon-gif-3476626",
        "https://tenor.com/view/you-have-no-power-here-king-theodon-no-power-here-lotr-gif-7431175",
        "*TIPS FEDORA* Its High Noon somewhere, but not here"
      ];
      const returnMessage = Math.floor(Math.random() * 10);
      message.reply(messageArray[returnMessage]);
    }
  }
  if (message.content === "<@529096820089946122>") {
    const messageArray = [
      "*TIPS FEDORA* M'lady",
      "*TIPS FEDORA* You are dumber than you seem https://tenor.com/view/are-you-stupid-stupid-gordon-ramsay-gif-4618432",
      "*TIPS FEDORA* Youre a special kind of programmer aint ya?",
      "*TIPS FEDORA* Hello there.",
      "*TIPS FEDORA* Its High Noon somewhere, but not here"
    ];
    const returnMessage = Math.floor(Math.random() * 5);
    message.reply(messageArray[returnMessage]);
  }
  if (
    message.author.username === "MikaelAbehsera" &&
    message.content === "?song"
  ) {
    message.reply(
      "Making my way through the hood sippin' this Yak Bad boys bout to get blown with a mac Pla-ket-ket-ket-ket A pla-ket-ket-ket-ket Riding around the block with a Glock Your ass finna get shot Pew pew pew pew pew pew pew - that's the silencer Boom boom boom boom boom boom - that's the grenade launchers https://youtu.be/tesr1OyymXo?t=30"
    );
  }
  if (message.content === "?tedtalk") {
    message.reply(" Have you guys seen this? https://overcast.fm/+IEMc82QVU");
  }
  if (message.content === "?jtron") {
    const messageArray = [
      "I trust technology over science",
      "I paid $6 for this portfolio https://images-na.ssl-images-amazon.com/images/I/811fGdwqf%2BL._SL1500_.jpg",
      "Can someone tell me how I can get a job as a dev?",
      "I want to get my *HANDS DIRTY* with React",
      "I love Amazon, they treat their workers amazingly *6 weeks later* they said theyre gonna let me go! I hate them!",
      "I think I need to scrap everything and start again https://soundcloud.com/godmustfear/taking-a-break-from-chat-i-hope-you-feel-better/s-bY1nz"
    ];
    const returnMessage = Math.floor(Math.random() * 6);
    message.reply(messageArray[returnMessage]);
  }
  if (
    (message.author.username === "CaptainSplash" &&
      message.content === "?Splash") ||
    message.content === "?splash"
  ) {
    message.reply(
      "YOu sIr dOn't Do ErRor hANdliNg https://cdn.discordapp.com/attachments/492490056859123723/529869129046425640/spongebob.jpg"
    );
  }
  if (message.content === "?theguy") {
    message.reply(
      "https://cdn.discordapp.com/attachments/298175239777419284/529869952287768577/unknown.png"
    );
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
