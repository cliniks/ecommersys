export type isError<T> = {
  isError: T;
  isSuccess?: never;
};

export type isSuccess<U> = {
  isError?: never;
  isSuccess: U;
};

export type Either<T, U> = NonNullable<isError<T> | isSuccess<U>>;

export type UnwrapEither = <T, U>(e: Either<T, U>) => NonNullable<T | U>;

export const unwrapEither: UnwrapEither = <T, U>({
  isError,
  isSuccess,
}: Either<T, U>) => {
  if (isSuccess !== undefined && isError !== undefined) {
    throw new Error(
      `Received both isError and isSuccess values at runtime when opening an Either\nisError: ${JSON.stringify(
        isError
      )}\nisSuccess: ${JSON.stringify(isSuccess)}`
    );
    /*
     We're throwing in this function because this can only occur at runtime if something 
     happens that the TypeScript compiler couldn't anticipate. That means the application
     is in an unexpected state and we should terminate immediately.
    */
  }
  if (isError !== undefined) {
    return isError as NonNullable<T>; // Typescript is getting confused and returning this type as `T | undefined` unless we add the type assertion
  }
  if (isSuccess !== undefined) {
    return isSuccess as NonNullable<U>;
  }
  throw new Error(
    `Received no isError or isSuccess values at runtime when opening Either`
  );
};

export const isError = <T, U>(e: Either<T, U>): e is isError<T> => {
  return e.isError !== undefined;
};

export const isSuccess = <T, U>(e: Either<T, U>): e is isSuccess<U> => {
  return e.isSuccess !== undefined;
};

export const throwError = <T>(value: T): isError<T> => ({
  isError: value,
});

export const throwSuccess = <U>(value: U): isSuccess<U> => ({
  isSuccess: value,
});
