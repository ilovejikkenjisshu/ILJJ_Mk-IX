"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var dotenv = require("dotenv");
// load .env
dotenv.config();
var client = new client_1.ILJJ_Mk_IX();
var cmd_map = new Map();
cmd_map.set("ping", "./modules/ping.ts");
for (var key in cmd_map) {
    client.append_cmd(key, require(cmd_map.get(key)));
}
client.login(process.env.ILJJMKIX_TOKEN);
