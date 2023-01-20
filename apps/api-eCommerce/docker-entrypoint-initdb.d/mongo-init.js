print("Start creating database ##############");

db = db.getSiblingDB("cliniksDB");
db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "users_db" },
    { role: "readWrite", db: "evaluations_db" },
    { role: "readWrite", db: "sellers_db" },
    { role: "readWrite", db: "sellerSolicitations_db" },
    { role: "readWrite", db: "orders_db" },
    { role: "readWrite", db: "carts_db" },
    { role: "readWrite", db: "products_db" },
    { role: "readWrite", db: "coupons_db" },
    { role: "readWrite", db: "categories_db" },
    { role: "readWrite", db: "wallets_db" },
    { role: "readWrite", db: "walletsHistory_db" },
    { role: "readWrite", db: "logs_db" },
  ],
});
