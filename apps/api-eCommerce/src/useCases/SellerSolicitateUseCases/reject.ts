import { Request, Response } from "express";
import { SellersRepository, UsersRepository } from "../../repositories";
import { IStoreSolicitate } from "../../repositories/Interfaces";

const sellerRepo = SellersRepository;

const userRepo = UsersRepository;

export const reject = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("não foi encaminhado um id.");

    console.log({ id });

    const getStoreInfo = await repo.getOne({ key: "_id", value: id });

    if (!getStoreInfo.isActive) throw new Error("Conta já está invalidada");

    console.log({ getStoreInfo });

    const getUser = await userRepo.getOne({
      key: "_id",
      value: getStoreInfo.owner,
    });

    console.log({ getStoreInfo });

    console.log({ getUser });

    const getSeller = getUser.storeId
      ? await sellerRepo.getOne({
          key: "_id",
          value: getUser.storeId,
        })
      : null;

    if (!getSeller?.isActive) throw new Error("Vendedor já está invalidada");

    console.log({ getSeller });

    const updateSeller =
      getSeller &&
      (await sellerRepo?.update(`${getSeller._id}`, { isActive: false }));

    const updateUser = await userRepo.update(`${getUser._id}`, {
      access: 1,
    });

    const updateSolicitation = await repo.update(id as string, {
      isActive: false,
    });

    return res.json({ updateSeller, updateUser, updateSolicitation });
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
};
