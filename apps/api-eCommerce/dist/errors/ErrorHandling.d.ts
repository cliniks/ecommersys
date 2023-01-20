import { Response } from "express";
import { EnumErrorHandling } from "./enumErrors";
export declare const ErrorHandling: ({ code, message, res }: ErrorHandling) => Response<any, Record<string, any>>;
declare const Response: (code: EnumErrorHandling) => {
    message: string;
};
export type ErrorHandling = {
    code: EnumErrorHandling;
    message?: string;
    res: Response;
};
export {};
