export interface IMailSenderProvider {
  sendMail(body: sendMailType): Promise<any>;
}

export type sendMailType = {
  from?: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};
