import { Request, Response } from "express";
import { SendCodeEmail } from "../../Emails/templates/emailTemplates";
import { MailSenderProvider } from "../../providers/implementations/MailSenderProvider";
import { RedisImplementation } from "../../repositories";
import { IRedisRepository } from "../../repositories/Interfaces";

const mailSender = new MailSenderProvider();
const cache: IRedisRepository = new RedisImplementation();

export const createEmailToken = async (req: Request, res: Response) => {
  const { email } = req.body;

  const token = Math.floor(1000 + Math.random() * 9000);

  const html = SendCodeEmail({ code: token.toString() });
  const body = "";
  const subject = "Confirmação de E-mail";
  const to = email;

  console.log(token);

  await cache.insertData(email, token);

  await mailSender.sendMail({ body, html, subject, to });

  return res.json(
    "Pronto!\n\nCódigo encaminhado com sucesso!\n\nDigite o código recebido pelo e-mail cadastrado."
  );
};

export const confirmEmailToken = async (req: Request, res: Response) => {
  const { email, code } = req.body;

  const cacheData = await cache.getHashData(email);

  if (!cacheData)
    return res.status(400).send("Não possui um registro com esse código!");

  if (code === cacheData.code) {
    await cache.removeData(email);
    return res.json("Código confere!");
  } else {
    return res.status(400).send("Código não confere!");
  }
};
