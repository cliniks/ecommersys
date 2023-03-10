import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";
import { SellersRepository, UsersRepository } from "../../repositories";

const storeRepo = SellersRepository;
const userRepo = UsersRepository;

export const getSingleOrder = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    const { id }: any = req.params;

    let getSale: any = await repo.getOne({
      key: "_id",
      value: id,
    });

    let salesReturn = [];

    const getClient: any = await userRepo.getOne({
      key: "_id",
      value: getSale.userId,
      fields: "username,userInfo.name",
    });

    let newSale: any = { ...getSale._doc };

    for (let sale of getSale.sellers) {
      const getstore: any = await storeRepo.getOne({
        key: "_id",
        value: sale.storeId,
        fields: "storeInfo,name",
      });

      salesReturn.push({
        ...sale._doc,
        ...getstore._doc,
      });
    }

    newSale.sellers = salesReturn;

    newSale.client = {
      name: getClient.userInfo.name,
      email: getClient.username,
    };

    res.json(newSale);
  } catch (err: any) {
    res.status(400).send(err.toString());
  }
};
