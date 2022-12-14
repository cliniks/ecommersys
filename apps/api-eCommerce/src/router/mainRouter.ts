import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.json({ msg: "api principal cliniks" });
  } catch (err) {
    res.status(400).send({ msg: "não foi possível abrir o servidor" });
  }
});

export { router };
