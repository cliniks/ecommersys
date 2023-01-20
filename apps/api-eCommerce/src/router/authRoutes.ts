import { Router } from "express";
import { authUseCases } from "../useCases/AuthUseCases";

const AuthRoutes: Router = Router();

AuthRoutes.post("/", authUseCases.auth);
AuthRoutes.post("/verifyToken", authUseCases.verifyToken);
AuthRoutes.post("/createEmailToken", authUseCases.createEmailToken);
AuthRoutes.post("/confirmEmailToken", authUseCases.confirmEmailToken);

export { AuthRoutes };
