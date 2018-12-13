import * as Discord from "discord.js";
import { ILJJ_Mk_IX } from "../client";
import { ISubCommand } from "./types";

export class Module implements ISubCommand {
  client: ILJJ_Mk_IX;
  constructor(client: ILJJ_Mk_IX) {
    this.client = client;
  }

  get_description(): string {
    return "execute ping-pong test";
  }

  execute(msg: Discord.Message, argv: Array<string>): void {
    msg.channel.send("pong");
  }
}
