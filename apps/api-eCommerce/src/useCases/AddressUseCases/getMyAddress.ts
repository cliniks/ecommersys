import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import { getAllProps } from "../../repositories/interfaces/ICrudRepository";
import {
  addMyOwnStoreInMySearch,
  addMyOwnUserInMySearch,
} from "../../utils/searchsUtils";
import { AddressRepository } from "../../repositories/implementations/AddressRepository";

export const getMyStoreAddress = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const addresses = new AddressRepository();

    const findMyAddresses = await addresses.getAll({
      page,
      size,
      filter: addMyOwnStoreInMySearch(filter, user),
    });

    res.json(findMyAddresses);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};

export const getMyUserAddress = async (req: Request, res: Response) => {
  try {
    let {
      page = 1,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;

    const user = await returnUserFromToken(req);

    const addresses = new AddressRepository();

    const findMyAddresses = await addresses.getAll({
      page,
      size,
      filter: addMyOwnUserInMySearch(filter, user),
    });

    res.json(findMyAddresses);
  } catch (err) {
    console.log(err);
    res.status(400).send("não foi possível solicitar.");
  }
};
