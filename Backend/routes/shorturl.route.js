import express from 'express'
import { body } from 'express-validator'
const Router = express.Router();
import { createShorturl } from '../controllers/shorturl.controller.js';

Router.post('/create-url', [
	body('url').isURL().withMessage('full_url must be a valid URL').notEmpty().withMessage('full_url is required'),
],
	createShorturl
);

export default Router;