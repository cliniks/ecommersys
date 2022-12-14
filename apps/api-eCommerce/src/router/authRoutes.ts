import { Router } from "express";
import { authUseCases } from "../useCases/AuthUseCases";

const AuthRoutes = Router();

AuthRoutes.post("/", authUseCases.auth);
AuthRoutes.post("/verifyToken", authUseCases.verifyToken);

export { AuthRoutes };
