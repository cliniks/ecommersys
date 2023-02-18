import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import util from "util";
import fs from "fs";
import { ISellersRepository, fileType } from "../../repositories/Interfaces";
import { S3Repository } from "../../repositories";
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

    const storeUploaded = await repo.update(`${findMyStore._id}`, {
      banner: filePath,
    });

    return res.json(storeUploaded);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
