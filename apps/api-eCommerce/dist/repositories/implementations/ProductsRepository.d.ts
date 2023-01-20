import { Product } from "../../entities/product.entitie";
import { IProductsRepository } from "../interfaces/IProductsRepository";
import { ConnectRepo } from "./ConnectRepo";
export declare class ProductsRepository extends ConnectRepo implements IProductsRepository {
    private model;
    private crud;
    constructor();
    getOne: ({ key, value }: getOneProps) => Promise<any>;
    getAll: (props: getAllProps) => Promise<{
        result: any[];
        totalItems: number;
        pageSize: number;
        thisPage: number;
        totalPage: number;
    }>;
    addOne: (data: Product) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}
