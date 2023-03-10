/// <reference types="mongoose-paginate" />
import { Model } from "mongoose";
import { User, userInfo } from "../../entities";
import { getAllProps, getOneProps, IUsersRepository } from "../Interfaces";
declare class UsersImplementation implements IUsersRepository {
    private model;
    private crud;
    constructor(model: Model<User>);
    updateImage(user: User, img: string): Promise<any>;
    updateUserInfo(user: User, info: Partial<userInfo>): Promise<import("mongoose").Document<unknown, any, User> & User & Required<{
        _id: string;
    }>>;
    getOne: ({ key, value }: getOneProps) => Promise<User>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<User>>;
    getMany: (ids: string[], fields?: string) => Promise<User[]>;
    addOne: (data: User) => Promise<User>;
    update: (id: string, data: any) => Promise<User>;
    delete: (id: string) => Promise<any>;
}
export default UsersImplementation;
