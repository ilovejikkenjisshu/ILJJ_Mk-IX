import * as Discord from "discord.js";
import { ILJJ_Mk_IX } from "../client";
import { ISubCommand } from "./types";

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

let names = [
  "yasuyuki",
  "wasaki",
  "oeda",
  "watanabe",
  "yoshizawa",
  "maruyama",
  "kurimoto",
  "wada",
  "yonemura",
  "sapkota"
];

export class Module implements ISubCommand {
  client: ILJJ_Mk_IX;

  constructor(client: ILJJ_Mk_IX) {
    this.client = client;
  }

  get_description(): string {
    return "Hum...";
  }

  execute(msg: Discord.Message, argv: Array<string>): void {
    if (argv.length > 3) {
      msg.channel.send("Error");
      return;
    }

    let num = argv.length == 3 ? parseInt(argv[2]) : 1;
    if (num <= 0 || num > 1000) {
      msg.channel.send("Error");
      return;
    }

    let reply = "";
    for (let i = 0; i < num; i++) {
      let name = names[getRandomInteger(0, names.length)];
      let emojis = this.client.client.emojis;
      let emoji = emojis.find(emoji => emoji.name === name);
      reply += emoji.toString();

      if ((i + 1) % 50 == 0) {
        msg.channel.send(reply);
        reply = "";
      }
    }

    if (reply != "") msg.channel.send(reply);
  }
}
