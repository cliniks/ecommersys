import { Request, Response, Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { usersUseCases } from "../useCases/UsersUseCases";

import multer from "multer";

const upload = multer({ dest: "uploads/" });

const UsersRoutes = Router();

UsersRoutes.get("/", usersUseCases.FindOne);

UsersRoutes.get("/verifyUser", verifyers.verifyToken, (_, res: Response) => {
  try {
    res.json(true);
  } catch (err) {
    res.json(false);
  }
});

UsersRoutes.get("/getMyUser", verifyers.verifyToken, usersUseCases.getMyUser);

UsersRoutes.get("/all", verifyers.verifyAppToken, usersUseCases.FindAll);

UsersRoutes.post(
  "/",
  upload.single("img"),
  verifyers.verifyAppToken,
  usersUseCases.newUser
);

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

UsersRoutes.patch(
  "/:id",
  verifyers.verifyAppToken,
  verifyers.verifyToken,
  usersUseCases.Update
);

UsersRoutes.delete(
  "/:id",
  verifyers.verifyAppToken,
  verifyers.verifyToken,
  usersUseCases.Delete
);

UsersRoutes.post("/createEmailToken", usersUseCases.createEmailToken);

UsersRoutes.post("/confirmEmailToken", usersUseCases.confirmEmailToken);

export { UsersRoutes };
