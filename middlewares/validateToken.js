import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;


    if (!token) return res.status(401).json({ message: "No hay token,acceso denegado" });


    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {

        if (err) return res.status(403).json({ message: "error token" });

        req.user = decoded
    });


    next();
};