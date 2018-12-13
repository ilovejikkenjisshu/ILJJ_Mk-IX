import * as Discord from "discord.js";
import { ISubCommand } from "./modules/types";

export class ILJJ_Mk_IX {
  client: Discord.Client;
  subcmd_map: Map<string, ISubCommand>;

  constructor() {
    this.client = new Discord.Client();
    this.subcmd_map = new Map();

    this.client.on("ready", () => console.log("ready"));
    this.client.on("message", msg => this.on_message(msg));
  }

  private on_message(msg: Discord.Message) {
    if (this.client.user == msg.author) return;

    if (msg.content.startsWith("!mkix")) {
      let args = msg.content.split(" ");
      if (args.length <= 1) return;
      if (!this.subcmd_map.has(args[1])) return;

      this.subcmd_map.get(args[1]).execute(msg, args);
    }
  }

  append_cmd(subcmd: string, mod: ISubCommand) {
    this.subcmd_map.set(subcmd, mod);
  }

  get_cmds(): Map<string, ISubCommand> {
    return this.subcmd_map;
  }

  login(token: string) {
    this.client.login(token);
  }
}
