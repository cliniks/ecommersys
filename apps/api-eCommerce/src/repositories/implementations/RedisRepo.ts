import * as redis from "redis";
import { IRedisRepository } from "../Interfaces";

class RedisImplementation implements IRedisRepository {
  private client: redis.RedisClientType;

  constructor() {
    this.client = redis.createClient({
      socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(`${process.env.REDIS_PORT}`),
      },
      password: process.env.REDIS_PASS,
    });
    this.client.connect();
    this.client.on("error", (err: any) => console.log(err));
  }

  async insertData(key: string, value: any): Promise<any> {
    try {
      await this.client.hSet(key, { code: value });
    } catch (err) {
      console.log(err);
    }
  }
  async insertString(key: string, value: string): Promise<any> {
    try {
      await this.client.set(key, value);
    } catch (err) {
      console.log(err);
    }
  }
  async updateData(key: string, value: any): Promise<any> {
    await this.client.set(key, value);
  }
  async removeData(key: string): Promise<any> {
    await this.client.del(key);
  }
  async getData(key: string) {
    try {
      return await this.client.get(key);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async getHashData(key: string, field?: string) {
    try {
      if (field) {
        return await this.client.hGet(key, field);
      } else {
        return await this.client.hGetAll(key);
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export { RedisImplementation };
