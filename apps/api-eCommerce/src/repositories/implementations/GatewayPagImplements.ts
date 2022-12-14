import mongoose from "mongoose";
import { dbconfig, promiseRetryOptions } from "../../config/connectDB";
import { IGatewayPagRepository } from "../interfaces/IGatewayPagRepository";
import promiseRetry from "promise-retry";

class GatewayPagRepository implements IGatewayPagRepository {
  constructor() {
    this.initMongo();
  }
  async initMongo() {
    return promiseRetry(async (retry, number) => {
      console.log(
        `Gateway mongoose connecting to ${dbconfig.url} - retry number: ${number}`
      );
      return await mongoose
        .connect(dbconfig.url, {
          user: dbconfig.authMongo.user,
          pass: dbconfig.authMongo.pass,
        })
        .then(() =>
          console.log(`Gateway mongoose connected to ${dbconfig.url}`)
        )
        .catch(retry);
    }, promiseRetryOptions);
  }
  async AddPayment(): Promise<any> {}
  async UpdatePayment(): Promise<any> {}
}

export { GatewayPagRepository };
