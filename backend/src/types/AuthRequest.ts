import { Request } from "express";

export interface AuthRequest extends Request {
    user?: { // <- add userId property to request object
        id: number;
        email: string;
    };
}