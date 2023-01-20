print("Start creating database ##############");

db = db.getSiblingDB("cliniksDB");
db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "users" },
    { role: "readWrite", db: "evaluations" },
    { role: "readWrite", db: "sellers" },
    { role: "readWrite", db: "sellerSolicitations" },
    { role: "readWrite", db: "orders" },
    { role: "readWrite", db: "carts" },
    { role: "readWrite", db: "products" },
    { role: "readWrite", db: "coupons" },
    { role: "readWrite", db: "categories" },
    { role: "readWrite", db: "wallets" },
    { role: "readWrite", db: "walletsHistory" },
    { role: "readWrite", db: "logs" },
  ],
});
