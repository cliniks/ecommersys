import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { SellersRepository } from "../../repositories";

const storeRepo = SellersRepository;

export const getMySellerBuys = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    const { page = 0, size = 10, filter }: any = req.query;

    const user = await returnUserFromToken(req);

    let getSales: any = await repo.getAll({
      page,
      size,
      filter: {
        key: "storeIds",
        value: user.storeId,
        fields: filter?.fields || "",
      },
    });

    let salesReturn = [];

    for (let sale of getSales.result) {
      let newSale: any = { ...sale._doc };
      const getAllStores = await storeRepo.getMany(sale.storeIds, "_id,name");
      newSale["storeNames"] = getAllStores;
      salesReturn.push(newSale);
    }

    getSales.result = salesReturn;

    res.json(getSales);
  } catch (err: any) {
    res.status(400).send(err.toString());
  }
};
