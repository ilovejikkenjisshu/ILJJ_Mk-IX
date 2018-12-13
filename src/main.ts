import { ILJJ_Mk_IX } from "./client";
import * as dotenv from "dotenv";

import { Settings } from "./settings";
import * as parrot from "./modules/parrot";

// load .env
dotenv.config();

// create client
const client = new ILJJ_Mk_IX();

// setting loader
for (let cmd of Settings) {
  let key = cmd["name"];
  let opt = cmd["option"];

  switch (cmd["type"]) {
    case "direct":
      client.append_cmd(key, new opt["module"](client));
      break;
    case "parrot":
      client.append_cmd(
        key,
        new parrot.Module(client, opt["words"], opt["description"])
      );
      break;
  }
}

// execute bot
client.login(process.env.ILJJMKIX_TOKEN);
