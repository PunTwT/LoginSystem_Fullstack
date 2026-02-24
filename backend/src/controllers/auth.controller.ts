import { Request, Response } from "express";
import { AuthRequest } from "../types/AuthRequest";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db";

const JWT_SECRET = process.env.JWT_SECRET as string; // <- secret key for JWT

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body; // <- get email and password from request body
        const connection = await db; // <- get database connection
        const hash = await bcrypt.hash(password, 10); // <- hash password

        await connection.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hash]); // <- insert user into database

        res.json({ message: "User registered successfully" }); // <- send success response

    } catch (err: any) {
        console.error("Error registering user:", err);
        res.status(500).json({ message: "Internal server error" }); // <- send error response
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body; // <- get email and password from request body
        const connection = await db; // <- get database connection
        const [rows]: any = await connection.query("SELECT * FROM users WHERE email = ?", [email]); // <- query user from database

        if (rows.length === 0) {
            return res.status(400).json({ message: "Invalid email or password" }); // <- send error response
        }

        const user = rows[0]; // <- get user from query result
        const isPasswordValid = await bcrypt.compare(password, user.password); // <- compare password with hashed password

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" }); // <- send error response
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET as string, { expiresIn: "1h" }); // <- create JWT token
        res.json({ token }); // <- send token in response
    } catch (err: any) {
        console.error("Error logging in user:", err);
        res.status(500).json({ message: "Internal server error" }); // <- send error response
    }
};

export const profile = async (req: AuthRequest, res: Response) => {
    res.json({ message: "This is the profile page", user: req.user }); // <- send profile response with user info from request
};