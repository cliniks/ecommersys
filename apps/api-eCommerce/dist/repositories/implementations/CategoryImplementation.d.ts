import { Model } from "mongoose";
import { Category } from "../../entities";
import { ICategoryRepository, getAllProps, getOneProps } from "../Interfaces";
declare class CategoryImplementation implements ICategoryRepository {
    private model;
    private crud;
    constructor(model: Model<Category>);
    getOne: ({ key, value }: getOneProps) => Promise<Category>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<Category>>;
    getMany: (ids: string[], fields?: string) => Promise<Category[]>;
    addOne: (data: Category) => Promise<Category>;
    update: (id: string, data: any) => Promise<Category>;
    delete: (id: string) => Promise<any>;
}
export default CategoryImplementation;
