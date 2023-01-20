import mongoose from "mongoose";
import { getAllProps, getOneProps, ICrudRepository } from "../interfaces/ICrudRepository";
export declare class CrudRepo implements ICrudRepository {
    private model;
    constructor(model: mongoose.Model<any>);
    getOne({ key, value }: getOneProps): Promise<any>;
    getAll({ page, size, filter }: getAllProps): Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
