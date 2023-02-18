import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";
import {
  IStorePolicyRepository,
  getAllProps,
} from "../../repositories/Interfaces";

export const getMyPolicies = async (
  req: Request,
  res: Response,
  repo: IStorePolicyRepository
) => {
  try {
    let {
      page = 0,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const findMyPolicies = await repo.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    return res.json(findMyPolicies);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
