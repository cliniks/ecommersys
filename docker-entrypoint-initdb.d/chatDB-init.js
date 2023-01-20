print("Start creating database ##############");

db = db.getSiblingDB("chatDB");
db.createUser({
  user: "chatDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "rooms" },
    { role: "readWrite", db: "chats" },
    { role: "readWrite", db: "messages" },
    { role: "readWrite", db: "logs" },
  ],
});
