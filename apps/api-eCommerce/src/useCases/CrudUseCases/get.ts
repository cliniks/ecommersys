import { Request, Response } from "express";

export const get = async (req: Request, res: Response, repository: any) => {
  try {
    const { key, value } = req.query as { key: string; value: string };
    return res.json(await repository.getOne({ key, value }));
  } catch (err) {
    console.log(err);
    return res.json("não foi possível achar");
  }
};
