print("Start creating database ##############");

db = db.getSiblingDB("chatDB");
db.createUser({
  user: "chatDB",
  pwd: "aSITFA8SFAIULSBFASIGFAS87",
  roles: [
    { role: "readWrite", db: "rooms_db" },
    { role: "readWrite", db: "chats_db" },
    { role: "readWrite", db: "messages_db" },
    { role: "readWrite", db: "logs_db" },
  ],
});
