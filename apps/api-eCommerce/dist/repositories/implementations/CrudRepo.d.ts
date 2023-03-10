/// <reference types="mongoose-paginate" />
import { Model } from "mongoose";
import { ICrudRepository, getAllProps, getAllReturn, getOneProps } from "../Interfaces";
export declare class CrudRepo<E> implements ICrudRepository<E> {
    private model;
    constructor(model: Model<E>);
    getOne({ key, value, fields }: getOneProps): Promise<import("mongoose").HydratedDocument<E, {}, {}>>;
    getMany(idArray: string[], fields: string): Promise<import("mongoose").HydratedDocument<E, {}, {}>[]>;
    getAll({ page, size, filter }: getAllProps): Promise<getAllReturn<E>>;
    addOne(data: E): Promise<E>;
    update(id: string, data: any): Promise<import("mongoose").HydratedDocument<E, {}, {}>>;
    delete(id: string): Promise<import("mongoose").HydratedDocument<E, {}, {}>>;
}
