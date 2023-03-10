import {
  ChatsRepository,
  MessagesRepository,
  RoomsRepository,
  UsersRepository,
} from "../../repositories";

const chatRepo = ChatsRepository;

export const getMyChats = async (userId: string) => {
  try {
    console.log("getMyChats");
    let getChat: any = await chatRepo.getOne({
      key: "owner",
      value: userId.toString(),
    });

    const getRooms: any = await RoomsRepository.getMany(getChat.rooms);

    const roomsReturn = [];

    for (let room of getRooms) {
      const clientId = room.users.find(
        (user: string) => user !== userId.toString()
      );

      console.log(userId.toString(), "room.users", room.users, clientId);

      let client = await UsersRepository.getOne({
        key: "_id",
        value: `${clientId.toString()}`,
        fields: "userInfo.name,img",
      });

      const getRoomMessages = await MessagesRepository.getAll({
        page: 0,
        size: 20,
        filter: { key: "roomId", value: room._id.toString() },
      });

      let unReads = { [clientId.toString()]: 0, [userId.toString()]: 0 };

      if (getRoomMessages?.result?.length > 0) {
        for (let message of getRoomMessages.result) {
          const read = message.read;
          if (!read.includes(clientId.toString())) unReads[clientId]++;
          if (!read.includes(userId.toString())) unReads[userId.toString()]++;
        }
      }

      roomsReturn.push({ ...room._doc, client, unReads });
    }

    const data = { ...getChat._doc, rooms: roomsReturn };

    return data;
  } catch (err) {
    return console.log(err.toString());
  }
};
