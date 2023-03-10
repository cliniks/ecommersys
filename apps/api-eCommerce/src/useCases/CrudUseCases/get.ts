import { Request, Response } from "express";

export const get = async (req: Request, res: Response, repository: any) => {
  try {
    const { key, value, fields } = req.query as {
      key: string;
      value: string;
      fields: string;
    };

    const getOne = await repository.getOne({ key, value, fields });

    console.log({ key }, { value }, { fields }, getOne[key]?.toString());

    if (!getOne || !getOne[key] || getOne[key]?.toString() !== value)
      throw new Error("não foi possível encontrar");

    return res.json(getOne);
  } catch (err: any) {
    console.log(err);

    return res.status(400).send(err.message);
  }
};
