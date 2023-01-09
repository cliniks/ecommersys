export declare type isError<T> = {
    isError: T;
    isSuccess?: never;
};
export declare type isSuccess<U> = {
    isError?: never;
    isSuccess: U;
};
export declare type Either<T, U> = NonNullable<isError<T> | isSuccess<U>>;
export declare type UnwrapEither = <T, U>(e: Either<T, U>) => NonNullable<T | U>;
export declare const unwrapEither: UnwrapEither;
export declare const isError: <T, U>(e: Either<T, U>) => e is isError<T>;
export declare const isSuccess: <T, U>(e: Either<T, U>) => e is isSuccess<U>;
export declare const throwError: <T>(value: T) => isError<T>;
export declare const throwSuccess: <U>(value: U) => isSuccess<U>;
