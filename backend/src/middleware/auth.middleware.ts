import jwt, {JwtPayload} from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../types/AuthRequest";

const JWT_SECRET = process.env.JWT_SECRET as string; // <- secret key for JWT

export const authenticateToken = (
    req: AuthRequest, 
    res: Response, 
    next: NextFunction) => {
    const authHeader = req.headers.authorization; // <- get authorization header

    if (!authHeader || !authHeader.startsWith("Bearer ")) { // <- check if authorization header is provided and starts with "Bearer "
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1]; // <- get token from authorization header

    if (!token) { // <- check if token is provided
        return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload; // <- verify token and decode payload

        req.user = {
            id: decoded.id,
            email: decoded.email,
        };

        next(); // <- allow acess
    } catch (err) {
        console.error("Error verifying token:", err);
        return res.status(401).json({ message: "Invalid token" });
    }
};