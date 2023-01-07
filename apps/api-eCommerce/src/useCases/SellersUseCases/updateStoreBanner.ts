import { Request, Response } from "express";
import { ISellersRepository } from "../../repositories/Interfaces/ISellersRepository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { S3Repository } from "../../repositories/implementations/S3Repository";
import { fileType } from "../../repositories/Interfaces/IS3Repository";
import util from "util";
import fs from "fs";
const unlinkFile = util.promisify(fs.unlink);

export const updateStoreBanner = async (
  req: Request,
  res: Response,
  repo: ISellersRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    const upload = new S3Repository();

    const file = req.file as fileType;

    const uploadedLinks = async () => {
      const submit = await upload.uploadImage(file);
      unlinkFile(file.path);

      return Promise.resolve(submit);
    };

    const findMyStore = await repo.getOne({
      key: "_id",
      value: user.storeId,
    });

    const filePath = (await uploadedLinks()).Location;

    const storeUploaded = await repo.update(findMyStore._id, {
      banner: filePath,
    });

    res.json(storeUploaded);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
