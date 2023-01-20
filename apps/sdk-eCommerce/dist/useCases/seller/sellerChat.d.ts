import { ISellerDashboardChat } from "../../interfaces";
export declare class sellerChat implements ISellerDashboardChat {
    connectSocket(): void;
    connectRoom(roomId: {
        roomId: string;
    }): void;
    sendMessage(message: any): void;
    getMyChats(): void;
}
