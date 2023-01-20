/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose-paginate" />
/// <reference types="mongoose" />
import { User } from "../../entities/user.entitie";
import { IUsersRepository, UserInfo } from "../interfaces/IUsersRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class UsersRepository extends ConnectRepo implements IUsersRepository {
    model: import("mongoose").Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        img: string;
        isActive: boolean;
        username: string;
        password: string;
        wishList: any[];
        favorites: any[];
        likes: any[];
        access: number;
        melhorEnvioID?: string | undefined;
        wallet?: string | undefined;
        statistics?: {
            productsViews: string[];
        } | undefined;
        gatewayPagId?: string | undefined;
        gatewayPagApiKey?: string | undefined;
        storeId?: string | undefined;
        orders?: number | undefined;
        userInfo?: {
            number?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            complement?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            cep?: string | undefined;
            email?: string | undefined;
            lastName?: string | undefined;
            fone?: string | undefined;
            cpf?: string | undefined;
            birthDate?: string | undefined;
        } | undefined;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        img: string;
        isActive: boolean;
        username: string;
        password: string;
        wishList: any[];
        favorites: any[];
        likes: any[];
        access: number;
        melhorEnvioID?: string | undefined;
        wallet?: string | undefined;
        statistics?: {
            productsViews: string[];
        } | undefined;
        gatewayPagId?: string | undefined;
        gatewayPagApiKey?: string | undefined;
        storeId?: string | undefined;
        orders?: number | undefined;
        userInfo?: {
            number?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            complement?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            cep?: string | undefined;
            email?: string | undefined;
            lastName?: string | undefined;
            fone?: string | undefined;
            cpf?: string | undefined;
            birthDate?: string | undefined;
        } | undefined;
    }>>;
    private crud;
    constructor();
    updateImage(user: User, img: string): Promise<any>;
    updateUserInfo(user: User, info: UserInfo): Promise<(import("mongoose").Document<unknown, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        img: string;
        isActive: boolean;
        username: string;
        password: string;
        wishList: any[];
        favorites: any[];
        likes: any[];
        access: number;
        melhorEnvioID?: string | undefined;
        wallet?: string | undefined;
        statistics?: {
            productsViews: string[];
        } | undefined;
        gatewayPagId?: string | undefined;
        gatewayPagApiKey?: string | undefined;
        storeId?: string | undefined;
        orders?: number | undefined;
        userInfo?: {
            number?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            complement?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            cep?: string | undefined;
            email?: string | undefined;
            lastName?: string | undefined;
            fone?: string | undefined;
            cpf?: string | undefined;
            birthDate?: string | undefined;
        } | undefined;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        img: string;
        isActive: boolean;
        username: string;
        password: string;
        wishList: any[];
        favorites: any[];
        likes: any[];
        access: number;
        melhorEnvioID?: string | undefined;
        wallet?: string | undefined;
        statistics?: {
            productsViews: string[];
        } | undefined;
        gatewayPagId?: string | undefined;
        gatewayPagApiKey?: string | undefined;
        storeId?: string | undefined;
        orders?: number | undefined;
        userInfo?: {
            number?: number | undefined;
            name?: string | undefined;
            address?: string | undefined;
            complement?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            cep?: string | undefined;
            email?: string | undefined;
            lastName?: string | undefined;
            fone?: string | undefined;
            cpf?: string | undefined;
            birthDate?: string | undefined;
        } | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (props: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: User) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
