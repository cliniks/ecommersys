export interface IMailSenderProvider {
  sendMail(message: IMessage): Promise<any>;
}

export interface IMessage {
  to: string;
  from?: string;
  subject: string;
  body: string;
  html?: string;
}
