import { Request, Response } from "express";

export const del = async (req: Request, res: Response, repository: any) => {
  try {
    await repository.delete(req.params.id);

    return res.json("Deletado com sucesso");
  } catch (err) {
    console.log(err);

    return res.json("não foi possível achar");
  }
};
