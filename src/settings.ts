import * as help from "./modules/help";
import * as dice from "./modules/dice";
import * as group from "./modules/group";

export const Settings: Array<any> = [
  {
    name: "help",
    type: "direct",
    option: {
      module: help.Module
    }
  },
  {
    name: "ping",
    type: "parrot",
    option: {
      description: "execute ping-pong test",
      words: ["pong"]
    }
  },
  {
    name: "fmufmu",
    type: "parrot",
    option: {
      description: "it will destroy your heart...",
      words: [
        "ふみゅ？",
        "ふみゅ〜",
        "ふみゅみゅ！",
        "ふみゅふみゅ〜",
        "ふみゅみゅ、、、"
      ]
    }
  },
  {
    name: "dice",
    type: "direct",
    option: {
      module: dice.Module
    }
  },
  {
    name: "group",
    type: "direct",
    option: {
      module: group.Module
    }
  }
];
