import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import {
  IMailSenderProvider,
  IMessage,
} from "../interfaces/IMailSenderProvider";

export class MailSenderProvider implements IMailSenderProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.MAIL_SENDER_PROVIDER,
      auth: {
        user: process.env.MAIL_SENDER_USER,
        pass: process.env.MAIL_SENDER_PASSWORD,
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    try {
      const sender = await this.transporter.sendMail({
        to: message.to,
        from: process.env.MAIL_SENDER,
        subject: message.subject,
        text: message.body,
        html: message.html,
      });
      return sender;
    } catch (err: any) {
      console.log(err);
      throw new Error("não foi possível conectar ao nodeMailer");
    }
  }
}
