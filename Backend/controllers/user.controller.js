import { validationResult } from "express-validator";
// import userModel from "../models/user.model";
// import userService from "../services/user.service"

export const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

export const loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

export const logoutUser = async (req, res, next) => {
    
}