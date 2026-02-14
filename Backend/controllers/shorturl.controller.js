import { validationResult } from 'express-validator';
import { createShorturlServiceWithoutUser, createShorturlServiceWithUser } from '../services/shorturl.service.js';
import { getShortUrl } from '../dao/shorturl.js';
import wrapAsync from '../utils/tryCatchWrapper.js';

export const createShorturl = wrapAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(req)
        return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body)

    // const { url } = req.body;
    const data = req.body
    let shortUrl
    if (req.user) {
        shortUrl = await createShorturlServiceWithUser(data.url, req.user._id, data.slug)
    } else {
        shortUrl = await createShorturlServiceWithoutUser(data.url)
    }

    // Placeholder response for demonstration
    res.status(201).json({
        message: 'Short URL created (controller logic not implemented)',
        shortUrl: `${process.env.APP_URL + shortUrl}`
    });
});

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const url = await getShortUrl(id)
    // url ? res.redirect(url.full_url) : res.status(404).send("Not found.");
    if (url) {
        res.redirect(url.full_url);
    } else {
        res.status(404).send("Not found.")
    }
});

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShorturlWithoutUser(url,customUrl)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})