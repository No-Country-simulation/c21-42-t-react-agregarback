import jwt from "jsonwebtoken";
import { secretToken } from "../config.js";

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secretToken, {
            expiresIn: "1d",
        }, (err, token) => {
            if(err) reject(err);
            resolve(token);
        });
    }
    );
}