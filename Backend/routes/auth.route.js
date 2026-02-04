import express from "express"
import { body } from "express-validator"
import { register_user, login_user } from "../controllers/auth.controller.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

const Router = express.Router()

Router.post("/register", [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("username").notEmpty().withMessage("Username is required")
], 
    register_user
);
Router.post("/login", [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required")
], 
    login_user
);

export default Router;