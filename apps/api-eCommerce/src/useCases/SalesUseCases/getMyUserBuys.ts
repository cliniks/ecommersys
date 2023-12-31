import { Request, Response } from "express";
import { ISalesRepository } from "../../repositories/Interfaces";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import {
  AddressesRepository,
  SellersRepository,
  UsersRepository,
} from "../../repositories";

const storeRepo = SellersRepository;

export const getMyUserBuys = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    const { page = 0, size = 10, filter }: any = req.query;

    const user = await returnUserFromToken(req);

    const userId = user._id.toString();

    let getSales: any = await repo.getAll({
      page,
      size,
      filter: {
        key: "userId" + " " + filter?.key || "",
        value: userId + " " + filter?.value || "",
        fields: filter?.fields || "",
      },
    });

    let salesReturn = [];

    for (let sale of getSales.result) {
      let newSale: any = { ...sale._doc };
      const getAllStores = await storeRepo.getMany(
        sale.storeIds,
        "_id,name,storeInfo"
      );
      newSale["storeNames"] = getAllStores;

      let sellers = [];

      for (let store of sale.sellers) {
        let newStoreInfos = { ...store._doc };
        const thisStore = getAllStores.find(
          (item) => item._id.toString() === store.storeId.toString()
        );
        const totalValue = store.products.reduce((a: number, b: any) => {
          return a + +b.totalValue;
        }, 0);

        newStoreInfos["store"] = thisStore;

        newStoreInfos["totalValue"] = totalValue;

        sellers.push(newStoreInfos);
      }

      newSale["sellers"] = sellers;

      const getAddress = await AddressesRepository.getOne({
        key: "_id",
        value: sale.addressId,
      });

      const getUser = await UsersRepository.getOne({
        key: "_id",
        value: sale.userId,
        fields: "userInfo,img,lastLogin",
      });

      newSale["clientAddress"] = getAddress;
      newSale["client"] = getUser;

      salesReturn.push(newSale);
    }

    let returnData = { ...getSales._doc };

    returnData.result = salesReturn;

    res.json(returnData);
  } catch (err: any) {
    res.status(400).send(err.toString());
  }
};
