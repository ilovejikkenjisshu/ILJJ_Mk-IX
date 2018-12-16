import * as Discord from "discord.js";
import { ILJJ_Mk_IX } from "../client";
import { ISubCommand } from "./types";

function shuffle<T>(a: Array<T>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export class Module implements ISubCommand {
  client: ILJJ_Mk_IX;

  constructor(client: ILJJ_Mk_IX) {
    this.client = client;
  }

  get_description(): string {
    return "group users";
  }

  execute(msg: Discord.Message, argv: Array<string>): void {
    if (argv.length != 4) {
      msg.channel.send("No...");
      return;
    }

    let from = argv[2].split(",");
    let to = argv[3].split(",");

    let from_chans = this.client.client.channels
      .filter(chan => chan.type == "voice")
      .map(chan => chan as Discord.VoiceChannel)
      .filter(chan => from.find(elem => elem == chan.name));
    if (from_chans.length != from.length) {
      msg.channel.send("error 1");
      return;
    }

    let to_chans = this.client.client.channels
      .filter(chan => chan.type == "voice")
      .map(chan => chan as Discord.VoiceChannel)
      .filter(chan => to.find(elem => elem == chan.name))
      .map(chan => chan.id);
    if (to_chans.length != to.length) {
      msg.channel.send("error 2");
      return;
    }

    let users: Array<Discord.GuildMember> = shuffle(
      [].concat(...from_chans.map(chan => chan.members.array()))
    );

    let i = 0;
    for (let user of users) {
      user.setVoiceChannel(to_chans[i]);
      i = (i + 1) % to_chans.length;
    }
  }
}
