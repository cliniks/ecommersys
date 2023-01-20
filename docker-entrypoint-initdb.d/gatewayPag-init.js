print("Start creating database ##############");

db = db.getSiblingDB("gatewayPag");
db.createUser({
  user: "gatewayPag",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "orders" },
    { role: "readWrite", db: "history" },
    { role: "readWrite", db: "logs" },
  ],
});
