export const ErrorHandling = (
  message?: string | Object | any[],
  code?: number
): ErrorReturnType => {
  if (typeof message === "object")
    return {
      code: 500,
      message,
    };
  return {
    code: code ? code : message ? 400 : 500,
    message: message || "Erro interno do servidor",
  };
};

export type Response<E, S> = { isSuccess: S; isError: E };

type ErrorReturnType = {
  code: number;
  message: string | Object;
};
