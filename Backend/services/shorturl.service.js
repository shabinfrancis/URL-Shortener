import { generateNanoid } from "../utils/helper.js"
// import shortUrl from "../models/shorturl.model.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/shorturl.js"

export const createShorturlServiceWithoutUser = async (url) => {
    const short_Url = generateNanoid(7)
    if(!short_Url) throw new Error("Short URL not generated")
    await saveShortUrl(url, short_Url)
    return short_Url;
}

export const createShorturlServiceWithUser = async (url, userId, slug=null) => {
    const short_Url = slug || generateNanoid(7)
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom url already exists")
    await saveShortUrl(url, short_Url, userId)
    return short_Url;
}