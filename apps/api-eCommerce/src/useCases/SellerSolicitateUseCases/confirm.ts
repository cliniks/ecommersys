import { Request, Response } from "express";
import { IStoreSolicitate } from "../../repositories/Interfaces";
import { Store } from "../../entities";
import { SellersRepository, UsersRepository } from "../../repositories";
import { sellerAssasProvider } from "../../providers";

const sellerAsaas = sellerAssasProvider;

const sellerRepo = SellersRepository;

const userRepo = UsersRepository;

export const confirm = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("não foi encaminhado um id.");

    const getStoreInfo = await repo.getOne({ key: "_id", value: id });

    if (getStoreInfo.isActive) throw new Error("Vendedor já existente");

    const Store: Store = {
      name: getStoreInfo.name,
      owner: `${getStoreInfo.owner}`,
      isActive: true,
      storeInfo: getStoreInfo.storeInfo,
    };

    const user = await userRepo.getOne({
      key: "_id",
      value: getStoreInfo.owner,
    });

    const addSeller = !user.storeId
      ? await sellerRepo.addOne(Store)
      : await sellerRepo.update(`${user.storeId}`, { isActive: true });

    await userRepo.update(`${Store.owner}`, {
      storeId: addSeller._id,
      access: 2,
    });

    await repo.update(id as string, { isActive: true });

    if (!user.storeId || !addSeller.asaasID)
      await sellerAsaas.addStore(addSeller);

    const getStoreUpdated = await sellerRepo.getOne({
      key: "_id",
      value: addSeller._id,
    });

    return res.json(getStoreUpdated);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
};
