import jwt from "jsonwebtoken";
import { secretToken } from "../config.js";

export const authRequired = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.status(401).json({message: "No token, Unauthorized"});
        jwt.verify(token, secretToken, (err, user) => {
            if(err) return res.status(403).json({message: "Invalid token"});
            req.user = user;
            next();
        }
    )} catch (error) {
        res.status(500).json({message: error.message});
    }
};