import { Request, Response } from "express";
import { returnUserFromToken } from "../../utils/returnUserFromToken";
import {
  getAllProps,
  IDocumentRepository,
} from "../../repositories/Interfaces";
import { addMyOwnUserInMySearch } from "../../utils/searchsUtils";

export const getMyDocuments = async (
  req: Request,
  res: Response,
  repo: IDocumentRepository
) => {
  try {
    let {
      page = 0,
      size = 10,
      filter = { key: "", value: "", fields: "" },
    }: getAllProps = req.query;
    const user = await returnUserFromToken(req);

    const findMyDocuments = await repo.getAll({
      page,
      size,
      filter: addMyOwnUserInMySearch(filter, user),
    });

    return res.json(findMyDocuments);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível solicitar.");
  }
};
