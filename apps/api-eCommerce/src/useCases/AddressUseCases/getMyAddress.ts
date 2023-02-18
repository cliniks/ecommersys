import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import {
  addMyOwnStoreInMySearch,
  addMyOwnUserInMySearch,
} from "../../utils/searchsUtils";
import { IAddressRepository, getAllProps } from "../../repositories/Interfaces";

export const getMyStoreAddress = async (
  req: Request,
  res: Response,
  addresses: IAddressRepository
) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const findMyAddresses = await addresses.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    return res.json(findMyAddresses);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};

export const getMyUserAddress = async (
  req: Request,
  res: Response,
  addresses: IAddressRepository
) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const findMyAddresses = await addresses.getAll({
      page,
      size,
      filter: addMyOwnUserInMySearch(filter, user),
    });

    return res.json(findMyAddresses);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
