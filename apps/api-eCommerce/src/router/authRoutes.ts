import { Router } from "express";
import { authUseCases } from "../useCases/AuthUseCases";

const AuthRoutes: Router = Router();

AuthRoutes.post("/", authUseCases.auth);
AuthRoutes.post("/accountExistence", authUseCases.verifyAccountExistence);
AuthRoutes.post("/verifyToken", authUseCases.verifyToken);
AuthRoutes.post("/changePassword", authUseCases.changePassword);
AuthRoutes.post("/createEmailToken", authUseCases.createEmailToken);
AuthRoutes.post("/confirmEmailToken", authUseCases.confirmEmailToken);

export { AuthRoutes };
