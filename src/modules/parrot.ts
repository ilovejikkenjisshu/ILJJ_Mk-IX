import * as Discord from "discord.js";
import { ILJJ_Mk_IX } from "../client";
import { ISubCommand } from "./types";

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export class Module implements ISubCommand {
  client: ILJJ_Mk_IX;
  messages: Array<string>;
  description: string;

  constructor(
    client: ILJJ_Mk_IX,
    messages: Array<string>,
    description: string
  ) {
    this.client = client;
    this.messages = messages;
    this.description = description;
  }

  get_description(): string {
    return this.description;
  }

  execute(msg: Discord.Message, argv: Array<string>): void {
    let pos = getRandomInteger(0, this.messages.length - 1);
    msg.channel.send(this.messages[pos]);
  }
}
