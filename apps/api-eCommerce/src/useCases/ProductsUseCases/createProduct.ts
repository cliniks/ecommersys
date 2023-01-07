import { Request, Response } from "express";
import util from "util";
import fs from "fs";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";
import { fileType } from "../../repositories/Interfaces/IS3Repository";
import { S3Repository } from "../../repositories/implementations/S3Repository";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { Product } from "../../entities/product.entitie";
const unlinkFile = util.promisify(fs.unlink);

export const createProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { body } = req;

    const files = req.files as fileType[];

    let product: Product = { ...body };

    const user = await returnUserFromToken(req);

    const upload = new S3Repository();

    const uploadedLinks = async () => {
      const mappedFiles = files?.map(async (file) => {
        const submit = await upload.uploadImage(file);
        unlinkFile(file.path);
        return submit.Location;
      });
      return Promise.all(mappedFiles);
    };

    product.imgs = await uploadedLinks();
    product.owner = user.storeId;

    const resolveProductAdd = await repo.addOne(product);

    res.json(resolveProductAdd);
  } catch (err) {
    console.log("createProduct", err);
    res.status(400).send("não foi possível criar.");
  }
};
