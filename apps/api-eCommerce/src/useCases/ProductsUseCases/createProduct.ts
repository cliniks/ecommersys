import { Request, Response } from "express";
import util from "util";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";
import { fileType } from "../../repositories/Interfaces/IS3Repository";
import fs from "fs";
const unlinkFile = util.promisify(fs.unlink);

export const createProduct = async (
  req: Request,
  res: Response,
  repo: IProductsRepository
) => {
  try {
    const { body } = req;

    const file = req.file as fileType;
    console.log(body);

    unlinkFile(file.path);

    res.json("produto criado");
  } catch (err) {
    console.log("createProduct", err);
    res.status(400).send("não foi possível criar.");
  }
};
