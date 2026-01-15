import { generateNanoid } from "../utils/generateNanoid.js"
// import shortUrl from "../models/shorturl.model.js"
import { saveShortUrl } from "../dao/shorturl.js"

export const createShorturlServiceWithoutUser = async (url) => {
    const short_Url = generateNanoid(7)
    if(!short_Url) throw new Error("Short URL not generated")
    await saveShortUrl(url, "RHAyOiU")
    return short_Url;
}

export const createShorturlServiceWithUser = async (url, userId) => {
    const short_Url = generateNanoid(7)
    await saveShortUrl(url, short_Url, userId)
    return short_Url;
}