import { Request } from "express";
import { User } from "../entities/user.entitie";
declare const returnUserFromToken: (req: Request) => Promise<User>;
declare const getUserFromToken: (token: string) => Promise<User>;
export { returnUserFromToken, getUserFromToken };
