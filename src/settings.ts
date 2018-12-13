import * as help from "./modules/help";

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
  }
];
