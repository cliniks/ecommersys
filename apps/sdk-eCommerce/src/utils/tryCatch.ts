import { isSuccess, unwrapEither } from "../Errors/Either";
import { ErrorHandling } from "../Errors/ErrorHandling";

export const Try = async (fn: any, ...args: any) => {
  try {
    const resolver = await fn.apply(null, args);

    if (isSuccess(resolver)) unwrapEither(resolver);

    return resolver;
  } catch (err: any) {
    const axiosError = { isError: err?.response?.data };

    return ErrorHandling(axiosError);
  }
};
