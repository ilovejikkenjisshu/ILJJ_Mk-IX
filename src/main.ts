import { ILJJ_Mk_IX } from "./client";
import * as dotenv from "dotenv";

import { Module } from "./modules/ping";

// load .env
dotenv.config();

const client = new ILJJ_Mk_IX();

client.append_cmd("ping", new Module());

client.login(process.env.ILJJMKIX_TOKEN);
