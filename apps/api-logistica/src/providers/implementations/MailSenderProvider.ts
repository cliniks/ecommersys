import { IMailSenderProvider, sendMailType } from "../IMailSenderProvider";
import nodemailer from "nodemailer";
import { mailerConfig } from "../../config/nodemailer";

export class MailSenderProvider implements IMailSenderProvider {
  private sender: any;
  constructor() {
    this.sender = nodemailer.createTransport(mailerConfig);
  }

  async sendMail(body: sendMailType): Promise<any> {
    try {
      body.from = 'Dev Cliniks "<dev@cliniks.com.br>"';
      const send = await this.sender.sendMail(body);
      return { send };
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
