import { Request, Response } from "express";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { S3Repository } from "../../repositories/implementations/S3Repository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { fileType } from "../../repositories/Interfaces/IS3Repository";
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

    res.json(await repository.updateImage(user, newImage));
  } catch (err) {
    res.status(400).send("não foi possível atualizar a imagem");
  }
};
