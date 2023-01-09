import { apiEcommerce } from "../axiosInstances";
import { Either, throwError, throwSuccess } from "../../Errors/Either";

export const validateMutations = {
  confirmAppToken: async (
    appToken: string
  ): Promise<Either<ConfirmAppTokenErrors, boolean>> => {
    const confirmation = await apiEcommerce.post("/validateAppToken", {
      appToken,
    });

    if (confirmation.data) return throwSuccess(confirmation.data);

    return throwError("Não foi possível validar");
  },

  verifyUserToken: async (): Promise<
    Either<ConfirmAppTokenErrors, boolean>
  > => {
    const verify = await apiEcommerce.get("/users/verifyUser");
    if (verify.data) return throwSuccess(verify.data);
    return throwError("Não foi possível validar");
  },
};

export type ConfirmAppTokenErrors = "Não foi possível validar";
