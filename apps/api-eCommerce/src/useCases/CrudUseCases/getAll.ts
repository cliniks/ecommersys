import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response, repository: any) => {
  try {
    const { page, size, filter } = req.query;

    return res.json(
      await repository.getAll({
        page: page && +page,
        size: size && +size,
        filter,
      })
    );
  } catch (err) {
    console.log(err);
    return res.json("não foi possível achar");
  }
};
