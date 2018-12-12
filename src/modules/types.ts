import * as Discord from "discord.js";

export interface ISubCommand {
  execute(
    client: Discord.Client,
    msg: Discord.Message,
    argv: Array<string>
  ): void;
}
