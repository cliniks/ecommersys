import { Request, Response } from "express";
import { UsersRepository } from "../../repositories";
import { IStoreSolicitate, getOneProps } from "../../repositories/Interfaces";

const userRepo = UsersRepository;

export const findOne = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  const getSingle: any = await repo.getOne(req.query as getOneProps);

  if (getSingle) {
    const getOwner = await userRepo.getOne({
      key: "_id",
      value: getSingle.owner,
    });
    return res.json({ ...getSingle._doc, owner: getOwner });
  }

  return res.json(getSingle);
};
