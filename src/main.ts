import { ILJJ_Mk_IX } from "./client";
import * as dotenv from "dotenv";

import * as help from "./modules/help";
import * as parrot from "./modules/parrot";

// load .env
dotenv.config();

const client = new ILJJ_Mk_IX();

client.append_cmd("help", new help.Module(client));
client.append_cmd(
  "ping",
  new parrot.Module(client, ["pong"], "execute ping-pong test")
);

client.login(process.env.ILJJMKIX_TOKEN);
