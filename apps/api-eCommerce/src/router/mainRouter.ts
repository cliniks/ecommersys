import { Request, Response, Router } from "express";

const router = Router();

router.post("/validateAppToken", (req: Request, res: Response) => {
  try {
    const { appToken } = req.body;

    // gerar uma tabela para armazenar o token e vincular db para token
    const confirmAppToken = appToken === process.env.CLINIKS_APPTOKEN;

    res.json(confirmAppToken);
  } catch (err) {
    res.status(400).send(false);
  }
});

export { router };
