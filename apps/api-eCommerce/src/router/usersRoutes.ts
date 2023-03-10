import { Response, Router } from "express";
import { verifyers } from "../middlewares/verifyers";
import { usersUseCases } from "../useCases/UsersUseCases";

import multer from "multer";
import { salesUseCases } from "../useCases/SalesUseCases";

const upload = multer({ dest: "uploads/" });

const UsersRoutes: Router = Router();

UsersRoutes.get("/", verifyers.verifyToken, usersUseCases.FindOne);

UsersRoutes.post("/many", verifyers.verifyToken, usersUseCases.FindMany);

UsersRoutes.get("/verifyUser", verifyers.verifyToken, (_, res: Response) => {
  try {
    res.json(true);
  } catch (err) {
    res.json(false);
  }
});

UsersRoutes.get("/getMyUser", verifyers.verifyToken, usersUseCases.getMyUser);

UsersRoutes.get("/all", verifyers.verifyToken, usersUseCases.FindAll);

UsersRoutes.get(
  "/getMyBuys",
  verifyers.verifyToken,
  salesUseCases.getMyUserBuys
);

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

UsersRoutes.get(
  "/seeProduct/:id",
  verifyers.verifyToken,
  usersUseCases.seeProduct
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
