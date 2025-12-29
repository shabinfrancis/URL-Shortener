import { validationResult } from "express-validator";
import userModel from "../models/user.model";
import userService from "../services/user.service"

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

module.exports.logoutUser = async (req, res, next) => {
    
}