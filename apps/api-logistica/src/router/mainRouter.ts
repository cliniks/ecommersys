import { Request, Response, Router } from "express";
import { MailSenderProvider } from "../providers/implementations/MailSenderProvider";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.json({ msg: "api integracao com melhor envio" });
  } catch (err) {
    res.status(400).send({ msg: "não foi possível abrir o servidor" });
  }
});

router.get("/authCode", (req: Request, res: Response) => {
  try {
    res.json({ msg: "api integracao com melhor envio" });
  } catch (err) {
    res.status(400).send({ msg: "não foi possível abrir o servidor" });
  }
});

router.get("/sendMail", async (req: Request, res: Response) => {
  try {
    const mailSender = new MailSenderProvider();
    const send = await mailSender.sendMail({
      to: "valgusto2000@hotmail.com",
      text: "Confirmação",
      html: "<div style='width:100%;display:flex;align-items:center;justify-content:center;color:#aaa;font-weight:bold;font-size:3em'>Email confirmação =D</div>",
      subject: "Confirmação",
    });
    console.log(send);
    res.json({ msg: "api integracao com melhor envio", send });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
});

export { router };
