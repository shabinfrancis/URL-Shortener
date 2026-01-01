import express from 'express'
import { body } from 'express-validator'
const Router = express.Router();
import shorturlController from "../controllers/shorturl.controller";

Router.post('/create-url', [
	body('full_url').isURL().withMessage('full_url must be a valid URL').notEmpty().withMessage('full_url is required'),
],
	shorturlController.createShorturl
);