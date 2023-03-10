import { Model } from "mongoose";
import { Product } from "../../entities";
import { getAllProps, getOneProps, IProductsRepository } from "../Interfaces";
declare class ProductsImplementation implements IProductsRepository {
    private model;
    private crud;
    constructor(model: Model<Product>);
    getOne: ({ key, value, fields }: getOneProps) => Promise<Product>;
    getAll: (props: getAllProps) => Promise<import("../Interfaces").getAllReturn<Product>>;
    getMany: (ids: string[], fields?: string) => Promise<Product[]>;
    addOne: (data: Product) => Promise<Product>;
    update: (id: string, data: any) => Promise<Product>;
    delete: (id: string) => Promise<any>;
}
export default ProductsImplementation;
