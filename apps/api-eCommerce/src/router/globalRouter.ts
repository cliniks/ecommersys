import { Request, Response, Router } from "express";
import { fileType } from "../repositories/Interfaces/IS3Repository";
import { S3Repository } from "../repositories/implementations/S3Repository";
import util from "util";
import fs from "fs";
import multer from "multer";
import { verifyers } from "../middlewares/verifyers";

const upload = multer({ dest: "uploads/" });

const unlinkFile = util.promisify(fs.unlink);

const S3 = new S3Repository();

const globalRouter: Router = Router();

globalRouter.post(
  "/addImage",
  verifyers.verifyToken,
  upload.single("img"),
  async (req: Request, res: Response) => {
    try {
      const file = req.file as fileType;

      const upload = await S3.uploadImage(file);

      unlinkFile(file.path);

      res.json(upload.Location);
    } catch (err) {
      res.status(400).send(false);
    }
  }
);

export { globalRouter };
