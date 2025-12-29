import { body, ExpressValidator } from "express-validator";
import express from "express"
const Router = express.Router();

Router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firstname must be at least 3 characters long'),
    body('password').isLength({min: 8}).withMessage("Password must be at least of length 8"),
],
    
)