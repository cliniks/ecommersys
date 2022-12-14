import mongoose from "mongoose";
import { dbconfig } from "../../config/connectDB";
import { IGatewayPagRepository } from "../interfaces/IGatewayPagRepository";

class GatewayPagRepository implements IGatewayPagRepository {
  constructor() {
    this.initMongo();
  }
  async initMongo() {
    // await mongoose.connect(dbconfig.url, {
    //   user: dbconfig.authMongo.user,
    //   pass: dbconfig.authMongo.pass,
    // });
  }
  async AddPayment(): Promise<any> {}
  async UpdatePayment(): Promise<any> {}
}

export { GatewayPagRepository };
