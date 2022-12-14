import mongoose from "mongoose";

export class ConnectRepo {
  public cartsRepository = mongoose.createConnection(
    `${process.env.REPO_CARTS_CONNECTION}`
  );
  public productsRepository = mongoose.createConnection(
    `${process.env.REPO_PRODUCTS_CONNECTION}`
  );
  public usersRepository = mongoose.createConnection(
    `${process.env.REPO_USERS_CONNECTION}`
  );
  public salesRepository = mongoose.createConnection(
    `${process.env.REPO_SALES_CONNECTION}`
  );
  public sellersRepository = mongoose.createConnection(
    `${process.env.REPO_SELLERS_CONNECTION}`
  );
}
