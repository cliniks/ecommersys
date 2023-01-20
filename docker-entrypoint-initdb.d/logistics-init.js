print("Start creating database ##############");

db = db.getSiblingDB("logistics");
db.createUser({
  user: "logistics",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "orders" },
    { role: "readWrite", db: "history" },
    { role: "readWrite", db: "logs" },
  ],
});
