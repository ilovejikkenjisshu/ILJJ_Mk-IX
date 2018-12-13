import * as Discord from "discord.js";
import { ILJJ_Mk_IX } from "../client";
import { ISubCommand } from "./types";

export class Module implements ISubCommand {
  client: ILJJ_Mk_IX;
  constructor(client: ILJJ_Mk_IX) {
    this.client = client;
  }

  get_description(): string {
    return "show all the commands";
  }

  execute(msg: Discord.Message, argv: Array<string>): void {
    let cmds = this.client.get_cmds();

    let description = "";
    description += "Usage:\n";
    cmds.forEach((v, k) => {
      description += "   - " + k + "\n";
      description += "     " + v.get_description() + "\n";
    });

    msg.channel.send(description);
  }
}
