import { Either, throwError, throwSuccess } from "../../Errors/Either";
import { apiEcommerce, updateInterceptor } from "../axiosInstances";

export const authMutations = {
  auth: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<Either<AuthErrors, authRes>> => {
    if (!username) return throwError("Campo username não pode estar vazio");

    if (!password) return throwError("Campo senha não pode estar vazio");

    const verify = await apiEcommerce.post<{
      accessToken: string;
      userId: string;
      seller?: string;
    }>("/auth", { username, password });

    if (!verify) return throwError("Não foi possível autenticar");

    updateInterceptor({ ["x-access-token"]: verify.data.accessToken });

    return throwSuccess(verify.data);
  },
  verifyToken: async (token: string) => {
    const verify = await apiEcommerce.post("auth/verifyToken", { token });

    if (!verify) return throwError("Não foi possível autenticar");

    return throwSuccess(verify.data);
  },
};

export type AuthErrors =
  | "Campo senha não pode estar vazio"
  | "Campo username não pode estar vazio"
  | "Não foi possível autenticar";

export type authRes = { accessToken: string; userId: string; seller?: string };
