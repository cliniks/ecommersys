print("Start creating database ##############");

db = db.getSiblingDB("gatewayPag");
db.createUser({
  user: "gatewayPag",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "orders_db" },
    { role: "readWrite", db: "history_db" },
    { role: "readWrite", db: "logs_db" },
  ],
});
