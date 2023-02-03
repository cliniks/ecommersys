import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";
import { addMyOwnStoreInMySearch } from "../../utils/searchsUtils";
import { StorePoliciesRepository } from "../../repositories/implementations/StorePoliciesRepo";

export const getMyPolicies = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const policies = new StorePoliciesRepository();

    const findMyPolicies = await policies.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    res.json(findMyPolicies);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
