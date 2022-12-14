import { Request, Response } from "express";
import { MailSenderProvider } from "../../providers/implementations/MailSenderProvider";
import { IRedisRepository } from "../../repositories/Interfaces/IRedisRepository";
import { SendCodeEmail } from "../../Emails/templates/emailTemplates";

const mailSender = new MailSenderProvider();

export const createEmailToken = async (
  req: Request,
  res: Response,
  cache: IRedisRepository
) => {
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

export const confirmEmailToken = async (
  req: Request,
  res: Response,
  cache: IRedisRepository
) => {
  const { email, code } = req.body;

  const cacheData = await cache.getHashData(email);

  if (code === cacheData.code) {
    await cache.removeData(email);
    return res.json("Código confere!");
  } else {
    return res.status(400).send("Código não confere!");
  }
};
