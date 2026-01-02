import { validationResult } from 'express-validator';
import { createShorturlService } from '../services/shorturl.service.js';

export const createShorturl = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { url } = req.body;
    const shortUrl = await createShorturlService(url);
    // Placeholder response for demonstration
    res.status(201).json({
        message: 'Short URL created (controller logic not implemented)',
        shortUrl: `${process.env.APP_URL + shortUrl}`
    });
};