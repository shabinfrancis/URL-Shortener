import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from 'cors'
import express from "express"
// import { nanoid } from "nanoid";
import connectToDb from './config/mongo.config.js';
// import shortUrlSchema from './models/shorturl.model.js';
import userRoutes from './routes/user.route.js'
import shorturlRoutes from './routes/shorturl.route.js'
import { redirectFromShortUrl } from "./controllers/shorturl.controller.js";
import { errorHandler } from "./utils/errorHandler.js";

connectToDb();

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("hello")
})

app.use('/users', userRoutes);
app.use('/api', shorturlRoutes);
app.use('/:id', redirectFromShortUrl);

app.use(errorHandler);

app.listen(8085, () => {
    console.log("Server listening to port 8085")
})