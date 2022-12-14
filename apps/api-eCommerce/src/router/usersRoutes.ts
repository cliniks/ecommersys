import { Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { usersUseCases } from "../useCases/UsersUseCases";

import multer from "multer";

const upload = multer({ dest: "uploads/" });

const UsersRoutes = Router();

UsersRoutes.get("/", usersUseCases.getMyUser);

UsersRoutes.get("/getMyUser", verifyers.verifyToken, usersUseCases.FineOne);

UsersRoutes.get("/all", usersUseCases.FindAll);

UsersRoutes.post("/", upload.single("img"), usersUseCases.newUser);

UsersRoutes.patch(
  "/image/:id",
  verifyers.verifyToken,
  upload.single("img"),
  usersUseCases.updateImage
);

UsersRoutes.patch(
  "/info/:id",
  verifyers.verifyToken,
  usersUseCases.updateUserInfo
);

UsersRoutes.patch("/:id", verifyers.verifyToken, usersUseCases.Update);

UsersRoutes.delete("/:id", verifyers.verifyToken, usersUseCases.Delete);

UsersRoutes.post("/createEmailToken", usersUseCases.createEmailToken);
UsersRoutes.post("/confirmEmailToken", usersUseCases.confirmEmailToken);

export { UsersRoutes };
