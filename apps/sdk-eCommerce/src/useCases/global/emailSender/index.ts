import { Response } from "../../../Errors";
import { IGlobalEmailSender } from "../../../interfaces";
import {
  EmailSenderErrors,
  emailSenderMutations,
} from "../../../services/mutations/emailSender";
import { Try } from "../../../utils";

export class GlobalEmailSender implements IGlobalEmailSender {
  async sendEmailToken(data: {
    email: string;
  }): Promise<Response<EmailSenderErrors, any>> {
    return await Try(emailSenderMutations.sendEmailToken, data);
  }
  async confirmEmailToken(data: {
    email: string;
    code: number;
  }): Promise<Response<EmailSenderErrors, any>> {
    return await Try(emailSenderMutations.confirmEmailToken, data);
  }
}
