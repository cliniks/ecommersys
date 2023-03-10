export interface ICrudRepository<E> {
    getOne?: (props: getOneProps) => Promise<E>;
    getMany?: (idArray: string[], fields?: string) => Promise<E[]>;
    getAll?: (props: getAllProps) => Promise<getAllReturn<E>>;
    addOne?: (data: E) => Promise<E>;
    update?: (id: string, data: Partial<E>) => Promise<E>;
    delete?: (id: string) => Promise<any>;
}
export declare type getOneProps = {
    key: string;
    value: any;
    fields?: string;
};
export declare type getAllProps = {
    page?: number;
    size?: number;
    filter?: filterProps;
};
export declare type getAllReturn<E> = {
    result: E[];
    totalItems: number;
    pageSize: number;
    thisPage: number;
    totalPage: number;
};
export declare type filterProps = {
    key?: string;
    value?: any;
    fields?: string;
};
