import jwt from "jsonwebtoken";
import { handleError } from "./error.js";

export const verifyToken = (req, _res, next) => {
    const token = req.cookies.access_token;
    console.log("token : ",token);
    if(!token) {
        return next(handleError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) {
            return next(handleError(403, "Token is not valid!"));
        }
        req.user = user;
        next();
    });
};