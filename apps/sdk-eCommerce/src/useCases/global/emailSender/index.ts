import { Response } from "../../../Errors";
import { IGlobalEmailSender } from "../../../interfaces";
import { authMutations } from "../../../services";
import { EmailSenderErrors } from "../../../services/mutations/emailSender";
import { Try } from "../../../utils";

export class GlobalEmailSender implements IGlobalEmailSender {
  async sendEmailToken(data: {
    email: string;
  }): Promise<Response<EmailSenderErrors, any>> {
    return await Try(authMutations, data);
  }
  async confirmEmailToken(data: {
    email: string;
    code: number;
  }): Promise<Response<EmailSenderErrors, any>> {
    return await Try(authMutations, data);
  }
}
