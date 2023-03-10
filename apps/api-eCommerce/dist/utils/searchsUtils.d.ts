import { User } from "../entities/user.entitie";
import { getAllProps } from "../repositories/Interfaces";
export declare const addMyOwnStoreInMySearch: (filter: getAllProps["filter"], user: User) => {
    key: string;
    value: string;
    fields: any;
};
export declare const addMyOwnUserInMySearch: (filter: getAllProps["filter"], user: User) => {
    key: string;
    value: string;
    fields: any;
};
