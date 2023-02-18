import { Request, Response } from "express";
import { IDocumentRepository } from "../../repositories/Interfaces";
import { returnUserFromToken } from "../../utils/returnUserFromToken";

export const addDocument = async (
  req: Request,
  res: Response,
  repo: IDocumentRepository
) => {
  try {
    const user = await returnUserFromToken(req);

    const DocumentToUpdate = { ...req.body, owner: user._id };

    const addDocuemnt = await repo.addOne(DocumentToUpdate);

    return res.json(addDocuemnt);
  } catch (err) {
    console.log(err);
    return res.status(400).send("não foi possível adicionar o documento");
  }
};
