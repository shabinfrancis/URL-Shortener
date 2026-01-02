import { generateNanoid } from "../utils/generateNanoid.js"
export const createShorturlService = (url) => {
    const shortUrl = generateNanoid(7);
    const newUrl = new shortUrlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save();
    return shortUrl;
}