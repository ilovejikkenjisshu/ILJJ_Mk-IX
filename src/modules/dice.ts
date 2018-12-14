import * as Discord from "discord.js";
import { ILJJ_Mk_IX } from "../client";
import { ISubCommand } from "./types";

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export class Module implements ISubCommand {
  client: ILJJ_Mk_IX;

  constructor(client: ILJJ_Mk_IX) {
    this.client = client;
  }

  get_description(): string {
    return "throw dices.";
  }

  execute(msg: Discord.Message, argv: Array<string>): void {
    if (argv.length != 3) {
      msg.channel.send("the length of argv must be 3.\ne.g. !mkix dice 2d6.");
      return;
    }

    let res = argv[2].match("^(\\d+)d(\\d+)$");
    if (!res) {
      msg.channel.send("args must be {num}d{faces}.");
      return;
    }

    let num = parseInt(res[1]);
    let faces = parseInt(res[2]);

    let reply =
      "[" +
      Array(num)
        .fill(undefined)
        .map(_ => getRandomInteger(1, faces + 1))
        .toString() +
      "]";

    msg.channel.send(reply);
  }
}
