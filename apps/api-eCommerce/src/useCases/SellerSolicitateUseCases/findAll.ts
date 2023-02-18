import { Request, Response } from "express";
import { UsersRepository } from "../../repositories";
import { IStoreSolicitate, getAllProps } from "../../repositories/Interfaces";

const userRepo = UsersRepository;

export const findAll = async (
  req: Request,
  res: Response,
  repo: IStoreSolicitate
) => {
  const { page = 0, size = 10, filter }: getAllProps = req.query;

  const confirmFilter =
    typeof filter === "string" ? JSON.parse(filter) : filter;

  const getAll = await repo.getAll({ page, size, filter: confirmFilter });

  const result: any = getAll.result;
  let allResults: any[] = [];

  for (let key in getAll.result) {
    const getOwner = await userRepo.getOne({
      key: "_id",
      value: result[key].owner,
    });
    allResults.push({
      ...result[key]._doc,
      owner: getOwner,
    });
  }

  const toReturn = { ...getAll, result: allResults };

  return res.json(toReturn);
};
