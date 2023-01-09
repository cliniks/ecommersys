export declare const ErrorHandling: (message?: string | Object | any[], code?: number) => ErrorReturnType;
export declare type Response<E, S> = {
    isSuccess: S;
    isError: E;
};
declare type ErrorReturnType = {
    code: number;
    message: string | Object;
};
export {};
