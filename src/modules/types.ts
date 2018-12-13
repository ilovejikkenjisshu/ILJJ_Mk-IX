import * as Discord from "discord.js";

export interface ISubCommand {
  get_description(): string;
  execute(msg: Discord.Message, argv: Array<string>): void;
}
