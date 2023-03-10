import { IMailSenderProvider, IMessage } from "../interfaces/IMailSenderProvider";
export declare class MailSenderProvider implements IMailSenderProvider {
    private transporter;
    constructor();
    sendMail(message: IMessage): Promise<void>;
}
