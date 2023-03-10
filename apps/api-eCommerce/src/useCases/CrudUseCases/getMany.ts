import { Request, Response } from "express";

export const getMany = async (req: Request, res: Response, repository: any) => {
  try {
    const { fields } = req.query as { fields: string };

    const getMany = await repository.getMany(req.body, fields);

    return res.json(getMany);
  } catch (err: any) {
    console.log(err);

    return res.status(400).send(err.message);
  }
};
