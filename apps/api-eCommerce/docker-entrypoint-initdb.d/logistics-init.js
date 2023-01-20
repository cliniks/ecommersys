print("Start creating database ##############");

db = db.getSiblingDB("logistics");
db.createUser({
  user: "logistics",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "orders_db" },
    { role: "readWrite", db: "history_db" },
    { role: "readWrite", db: "logs_db" },
  ],
});
