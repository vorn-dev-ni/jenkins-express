import express, { json, urlencoded } from "express";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.get("", (req, res) => {
    res.status(200).json({
        message: "This is cool",
    });
});
export default app;
