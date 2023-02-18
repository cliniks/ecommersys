import { Request, Response } from "express";

import { returnUserFromToken } from "../../utils/returnUserFromToken";

import { S3Repository } from "../../repositories";

import { IUsersRepository, fileType } from "../../repositories/Interfaces";

const s3 = new S3Repository();

export const updateImage = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    const file = req.file as fileType;

    const img = async () => {
      if (file) {
        try {
          console.log(file);

          const upload = await s3.uploadImage(file);

          return upload.Location;
        } catch (err) {
          return null;
        }
      }
      return null;
    };

    const newImage = (await img()) as string;

    return res.json(await repository.updateImage(user, newImage));
  } catch (err) {
    return res.status(400).send("não foi possível atualizar a imagem");
  }
};
