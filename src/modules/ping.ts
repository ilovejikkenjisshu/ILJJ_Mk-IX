import * as Discord from "discord.js";
import { ISubCommand } from "./types";

export class Module implements ISubCommand {
  execute(
    client: Discord.Client,
    msg: Discord.Message,
    argv: Array<string>
  ): void {
    msg.channel.send("pong");
  }
}
