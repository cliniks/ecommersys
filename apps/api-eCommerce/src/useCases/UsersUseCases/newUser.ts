import { Request, Response } from "express";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import bcrypt from "bcrypt";
import { ApiGP } from "../../services/ApiGatewayPag";
import { fileType } from "../../repositories/Interfaces/IS3Repository";
import { S3Repository } from "../../repositories/implementations/S3Repository";
import util from "util";
import fs from "fs";
const s3 = new S3Repository();
const unlinkFile = util.promisify(fs.unlink);

export const newUser = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const { username, password, userInfo } = req.body;

    const file = req.file as fileType;

    const upload = async () => {
      if (file) {
        try {
          const upload = await s3.uploadImage(file);
          await unlinkFile(file.path);
          return upload.Location;
        } catch (err) {
          return null;
        }
      }
      return null;
    };

    const img = await upload();

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      ...req.body,
      username,
      userInfo,
      img,
      access: 1,
      password: hashedPassword,
    };

    const user = await repository.addOne(userData);

    const createAsaasIntegration = await ApiGP.addClient(user, repository);

    const updateUser = await repository.update(user._id, {
      gatewayPagId: createAsaasIntegration.id,
    });

    res.json(updateUser);
  } catch (err: any) {
    const { code, keyValue } = err;
    res.json(`Código ${code}: Erro ao adicionar usuário: ${err.toString()}`);
  }
};
