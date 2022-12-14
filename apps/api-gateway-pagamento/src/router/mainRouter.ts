import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.json({ msg: "api integracao com asass" });
  } catch (err) {
    res.status(400).send({ msg: "não foi possível abrir o servidor" });
  }
});
router.post("/webhook", (req: Request, res: Response) => {
  try {
    const { body } = req;
    console.log(body);
    res.json(body);
  } catch (err) {
    res.status(400).send({ msg: "não foi possível abrir o servidor" });
  }
});

export { router };
