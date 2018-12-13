import { ILJJ_Mk_IX } from "./client";
import * as dotenv from "dotenv";

import * as help from "./modules/help";
import * as ping from "./modules/ping";

// load .env
dotenv.config();

const client = new ILJJ_Mk_IX();

client.append_cmd("help", new help.Module(client));
client.append_cmd("ping", new ping.Module(client));

client.login(process.env.ILJJMKIX_TOKEN);
