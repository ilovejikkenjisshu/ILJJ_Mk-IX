"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = require("discord.js");
var ILJJ_Mk_IX = /** @class */ (function () {
    function ILJJ_Mk_IX() {
        this.client = new Discord.Client();
        this.subcmd_map = new Map();
        this.client.on("message", this.on_message);
    }
    ILJJ_Mk_IX.prototype.on_message = function (msg) {
        if (this.client.user == msg.author)
            return;
        if (msg.content.startsWith("!mkix")) {
            var args = msg.content.split(" ");
            if (args.length <= 1)
                return;
            if (this.subcmd_map.has(args[1]))
                return;
            this.subcmd_map.get(args[1]).execute(this.client, msg, args);
        }
    };
    ILJJ_Mk_IX.prototype.append_cmd = function (subcmd, module) {
        this.subcmd_map.set(subcmd, module);
    };
    ILJJ_Mk_IX.prototype.login = function (token) {
        this.client.login(token);
    };
    return ILJJ_Mk_IX;
}());
exports.ILJJ_Mk_IX = ILJJ_Mk_IX;
