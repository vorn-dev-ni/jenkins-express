"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.listen(process.env.PORT, () => {
    console.log("Express is listen on port", process.env.PORT);
});
exports.default = server;
