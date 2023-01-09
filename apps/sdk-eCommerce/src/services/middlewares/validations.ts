import { Response } from "../../Errors/ErrorHandling";
import { Try } from "../../utils/tryCatch";
import { validateMutations } from "../mutations/validation";

export const middlewares = {
  confirmAppToken: async (appToken: string): Promise<Response<void, boolean>> =>
    await Try(validateMutations.confirmAppToken, appToken),

  verifyUserToken: async (): Promise<Response<void, boolean>> =>
    await Try(validateMutations.verifyUserToken),
};
