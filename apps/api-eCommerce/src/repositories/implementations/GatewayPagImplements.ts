import mongoose from "mongoose";
import { dbconfig } from "../../config/connectDB";
import { IGatewayPagRepository } from "../interfaces/IGatewayPagRepository";

class GatewayPagRepository implements IGatewayPagRepository {
  constructor() {
    this.initMongo();
  }
  async initMongo() {
    await mongoose
      .connect(dbconfig.url, {
        user: dbconfig.authMongo.user,
        pass: dbconfig.authMongo.pass,
      })
      .then(() => console.log(`Gateway mongoose connected to ${dbconfig.url}`))
      .catch(console.log);
  }
  async AddPayment(): Promise<any> {}
  async UpdatePayment(): Promise<any> {}
}

export { GatewayPagRepository };
