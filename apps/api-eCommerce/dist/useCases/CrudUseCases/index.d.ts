import { ICrudRepository, getAllProps, getOneProps } from "../../repositories/Interfaces";
export declare class CrudUseCases<E> {
    Repo: ICrudRepository<E>;
    constructor(Repo: ICrudRepository<E>);
    add(data: E): Promise<E>;
    getOne(props: getOneProps): Promise<E>;
    getMany(data: string[], fields?: string): Promise<E[]>;
    getAll(props: getAllProps): Promise<import("../../repositories/Interfaces").getAllReturn<E>>;
    update(id: string, data: Partial<E>): Promise<E>;
    delete(id: string): Promise<any>;
}
