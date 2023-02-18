import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response, repository: any) => {
  try {
    const { page, size, filter } = req.query;
    const filterConfirm =
      typeof filter === "string" ? JSON.parse(filter) : filter;
    return res.json(
      await repository.getAll({
        page: page && +page,
        size: size && +size,
        filter: filterConfirm,
      })
    );
  } catch (err) {
    console.log(err);
    return res.json("não foi possível achar");
  }
};
