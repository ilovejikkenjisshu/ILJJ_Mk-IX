import * as Discord from "discord.js";
import * as dotenv from "dotenv";

// load .env
dotenv.config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.channel.send("pong");
  }
});

client.login(process.env.ILJJMKIX_TOKEN);
