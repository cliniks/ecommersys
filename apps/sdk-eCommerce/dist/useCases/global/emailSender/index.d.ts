import { Response } from "../../../Errors";
import { IGlobalEmailSender } from "../../../interfaces";
import { EmailSenderErrors } from "../../../services/mutations/emailSender";
export declare class GlobalEmailSender implements IGlobalEmailSender {
    sendEmailToken(data: {
        email: string;
    }): Promise<Response<EmailSenderErrors, any>>;
    confirmEmailToken(data: {
        email: string;
        code: number;
    }): Promise<Response<EmailSenderErrors, any>>;
}
