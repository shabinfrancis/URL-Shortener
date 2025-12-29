import dotenv from 'dotenv';
dotenv.config();

import cookieParser from "cookie-parser";
import cors from 'cors'
import express from "express"
import { nanoid } from "nanoid";
import connectToDb from './config/mongo.config.js';
import shortUrlSchema from './models/shorturl.model.js';
import userRoutes from './routes/user.route.js'

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

app.get('/redirect/:id', async (req, res) => {
    const {id} = req.params;
    const url = await shortUrlSchema.findOne({short_url: id});
    if(url) {
        res.redirect(url.full_url);
    } else {
        res.status(404).send("Not found.")
    }
})

app.post('/create-url', (req, res) => {
    const {url} = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new shortUrlSchema({
        full_url: url,
        short_url:shortUrl
    })
    newUrl.save()
    res.send(nanoid(7))
})

app.listen(8085, () => {
    console.log("Server listening to port 8085")
})