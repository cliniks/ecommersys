import { Request, Response } from "express";
import bcrypt from "bcrypt";
import util from "util";
import fs from "fs";
import {
  AddressesRepository,
  CartsRepository,
  S3Repository,
} from "../../repositories";
import { IUsersRepository, fileType } from "../../repositories/Interfaces";
import { clientAssasProvider } from "../../providers";
import { Address, Cart } from "../../entities";
const s3 = new S3Repository();
const unlinkFile = util.promisify(fs.unlink);

const asaasClients = clientAssasProvider;

const AddressRepo = AddressesRepository;
const cartRepo = CartsRepository;

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

    const addAddress = await AddressRepo.addOne({
      ...user.userInfo,
      owner: `${user._id}`,
    } as Address);

    await repository.update(`${user._id}`, {
      userInfo: { ...user.userInfo, defaultAddress: `${addAddress._id}` },
    });

    await cartRepo.addOne({ owner: `${user._id}` } as Cart);

    const createAsaasIntegration = await asaasClients.newClient({ data: user });

    return res.json(createAsaasIntegration);
  } catch (err: any) {
    const { code, keyValue } = err;
    console.log(code, keyValue);
    return res.json(
      `Código ${code}: Erro ao adicionar usuário: ${err.toString()}`
    );
  }
};
