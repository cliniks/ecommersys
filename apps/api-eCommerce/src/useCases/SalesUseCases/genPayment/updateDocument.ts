import { Request, Response } from "express";
import { ISalesRepository } from "../../../repositories/Interfaces";
import { SaleDocuments } from "../../../entities";

export const UpdateDocument = async (
  req: Request,
  res: Response,
  repo: ISalesRepository
) => {
  try {
    const { document }: { document: SaleDocuments } = req.body;
    const { id } = req.params;
    const getSale = await repo.getOne({ key: "_id", value: id });
    let docs = Array.from(getSale.documents);
    docs.push(document);
    const updateDoc = await repo.update(id, { documents: docs });
    res.json(updateDoc);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.toString());
  }
};
