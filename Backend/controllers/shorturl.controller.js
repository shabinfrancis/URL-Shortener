import { validationResult } from 'express-validator';
import shortUrlModel from '../models/shorturl.model';
import { generateNanoid } from '../utils/generateNanoid';

module.exports.createShorturl = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { url } = req.body;
    const shortUrl = generateNanoid(7);
    const newUrl = new shortUrlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save();
    // Placeholder response for demonstration
    res.status(201).json({ message: 'Short URL created (controller logic not implemented)' });
};

export default shorturlController;
