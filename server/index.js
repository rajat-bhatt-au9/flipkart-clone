import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

//db connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () => console.log(`🚀🚀 server started on ${PORT}`));

//data to database
DefaultData();
