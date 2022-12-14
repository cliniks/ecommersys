import { Request, Response } from "express";

export const add = async (req: Request, res: Response, repository: any) => {
  try {
    return res.json(await repository.addOne(req.body));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível achar");
  }
};
