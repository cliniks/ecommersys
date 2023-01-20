import { IRedisRepository } from "../Interfaces/IRedisRepository";
declare class RedisImplementation implements IRedisRepository {
    private client;
    constructor();
    insertData(key: string, value: any): Promise<any>;
    insertString(key: string, value: string): Promise<any>;
    updateData(key: string, value: any): Promise<any>;
    removeData(key: string): Promise<any>;
    getData(key: string): Promise<unknown>;
    getHashData(key: string, field?: string): Promise<unknown>;
}
export { RedisImplementation };
