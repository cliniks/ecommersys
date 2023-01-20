import { ISellerDashboardChat } from "../../interfaces";

export class sellerChat implements ISellerDashboardChat {
  connectSocket() {}
  connectRoom(roomId: { roomId: string }) {
    console.log(roomId);
  }
  sendMessage(message: any) {
    console.log(message);
  }
  getMyChats() {}
}
