import { Response } from "../../Errors/ErrorHandling";
export declare const middlewares: {
    confirmAppToken: (appToken: string) => Promise<Response<void, boolean>>;
    verifyUserToken: () => Promise<Response<void, boolean>>;
};
