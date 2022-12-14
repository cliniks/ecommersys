import { Request, Response } from "express";

export const update = async (req: Request, res: Response, repository: any) => {
  try {
    return res.json(await repository.update(req.params.id, req.body));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível achar");
  }
};
