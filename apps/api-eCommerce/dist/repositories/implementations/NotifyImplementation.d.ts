import { Model } from "mongoose";
import { getAllProps, getAllReturn, getOneProps } from "../Interfaces";
import { INotifyRepository } from "../Interfaces/INotifyRepository";
import { notificationTypes } from "../../entities";
export declare class NotifyImplementation implements INotifyRepository {
    private model;
    private crud;
    constructor(model: Model<notificationTypes>);
    getOne: (props: getOneProps) => Promise<notificationTypes>;
    getAll: (props: getAllProps) => Promise<getAllReturn<notificationTypes>>;
    getMany: (ids: string[], fields?: string) => Promise<notificationTypes[]>;
    addOne: (data: notificationTypes) => Promise<notificationTypes>;
    update: (id: string, data: Partial<notificationTypes>) => Promise<notificationTypes>;
    delete: (id: string) => Promise<any>;
}
