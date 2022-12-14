import { cacheObj } from "../entities/cache.entitie";
import { RedisImplementation } from "../repositories/implementations/RedisRepo";

const Redis = new RedisImplementation();

const initiateUserObj = { code: "0" };

const initiateUser = async (key: string) => {
  await Redis.insertData(key, initiateUserObj);

  return Redis.getHashData(key);
};

const getUserCache = async (key: string): Promise<cacheObj> => {
  const getClient: Promise<cacheObj> | unknown = await Redis.getHashData(key);

  const client: cacheObj = getClient as cacheObj;

  console.log(client);

  if (client.code) return client;

  initiateUser(key);

  return (await Redis.getHashData(key)) as cacheObj;
};

const insertUserData = async (key: string, data: Object) => {
  try {
    await Redis.insertData(key, { ...data });

    return await Redis.getHashData(key);
  } catch (err) {
    console.log("não pode inserir");
  }
};

const getUserTokenData = async (email: string) => {
  const getToken: any = await Redis.getHashData(email);
  return getToken.code;
};

export { getUserCache, initiateUser, insertUserData, getUserTokenData };
