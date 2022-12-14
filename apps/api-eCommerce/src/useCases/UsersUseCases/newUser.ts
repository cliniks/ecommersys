import { Request, Response } from "express";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import fs from "fs";
import util from "util";
import bcrypt from "bcrypt";
import { S3Repository } from "../../repositories/implementations/S3Repository";
import { fileType } from "../../repositories/Interfaces/IS3Repository";
const unlinkFile = util.promisify(fs.unlink);
const S3 = new S3Repository();

export const newUser = async (
  req: Request,
  res: Response,
  repository: IUsersRepository
) => {
  try {
    const { username, password, userInfo } = req.body;

    const file = req.file as fileType;

    const img = async () => {
      if (req.file) {
        try {
          const upload = await S3.uploadImage(file);
          return upload.Location;
        } catch (err) {
          return null;
        }
      }
      return null;
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      username,
      userInfo,
      img: await img(),
      password: hashedPassword,
    };

    const user = await repository.addOne(userData);

    unlinkFile(file.path);

    // await ApiGP.addClient(savedUser, UserModel);
    // await ApiME.addClient(savedUser, UserModel);

    res.json(user);
  } catch (err) {
    console.log(err);
    console.log({ newUser: err });
    res.json("Erro ao adicionar usuário");
  }
};
