print("Start creating database ##############");

db = db.getSiblingDB("users_db");

db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [{ role: "readWrite", db: "users_db" }],
});

db = db.getSiblingDB("sellers_db");
db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [{ role: "readWrite", db: "sellers_db" }],
});

db = db.getSiblingDB("carts_db");
db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [{ role: "readWrite", db: "carts_db" }],
});

db = db.getSiblingDB("products_db");
db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [{ role: "readWrite", db: "products_db" }],
});

db = db.getSiblingDB("sales_db");
db.createUser({
  user: "cliniksDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [{ role: "readWrite", db: "sales_db" }],
});
