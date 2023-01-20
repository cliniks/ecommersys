print("Start creating database ##############");

db = db.getSiblingDB("notifyDB");
db.createUser({
  user: "notifyDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "notify_db" },
    { role: "readWrite", db: "logs_db" },
  ],
});
