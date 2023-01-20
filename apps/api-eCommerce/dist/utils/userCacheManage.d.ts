import { cacheObj } from "../entities/cache.entitie";
declare const initiateUser: (key: string) => Promise<unknown>;
declare const getUserCache: (key: string) => Promise<cacheObj>;
declare const insertUserData: (key: string, data: Object) => Promise<unknown>;
declare const getUserTokenData: (email: string) => Promise<any>;
export { getUserCache, initiateUser, insertUserData, getUserTokenData };
