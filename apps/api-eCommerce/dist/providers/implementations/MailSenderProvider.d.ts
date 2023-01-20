import { IMailSenderProvider, IMessage } from "../IMailSenderProvider";
export declare class MailSenderProvider implements IMailSenderProvider {
    private transporter;
    constructor();
    sendMail(message: IMessage): Promise<void>;
}
