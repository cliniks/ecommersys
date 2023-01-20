import { Request, Response } from "express";
import { Store } from "../../entities/store.entitie";
import { SellersRepository } from "../../repositories/implementations/SellersRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IStoreSolicitate } from "../../repositories/Interfaces/IStoreSolicitate";

export const confirm = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).send("não foi encaminhado um id.");
    const getStoreInfo = await repo.getOne({ key: "_id", value: id });
    const Store: Store = {
      name: getStoreInfo.name,
      owner: getStoreInfo.owner,
      isActive: true,
      storeInfo: getStoreInfo.storeInfo,
    };
    const sellerRepo = new SellersRepository();
    const userRepo = new UsersRepository();
    const addSeller = await sellerRepo.addOne(Store);
    await userRepo.update(Store.owner, { storeId: addSeller._id, access: 2 });
    await repo.delete(id as string);
    res.json(addSeller);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
