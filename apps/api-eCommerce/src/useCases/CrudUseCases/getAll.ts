import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response, repository: any) => {
  try {
    console.log(req.body);
    return res.json(await repository.getAll());
  } catch (err) {
    console.log(err);
    return res.json("não foi possível achar");
  }
};
