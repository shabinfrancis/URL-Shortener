import shortUrlSchema from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (longUrl, shorturl, userId) => {
    try {
        const newUrl = new shortUrlSchema({
            full_url: longUrl,
            short_url: shorturl
        })
        if (userId) {
            newUrl.user = userId;
        }
        await newUrl.save();
    } catch (error) {
        if (error.code == 11000) {
            throw new ConflictError(error);
        } else {
            throw new Error(error);
        }
    }
}

export const getShortUrl = async (shortUrl) => {
    return shortUrlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } });
}