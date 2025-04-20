"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../server"));
const app = server_1.default;
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
app.get('/get', (req, res) => {
    res.status(200).json({
        message: "This is cool"
    });
});
