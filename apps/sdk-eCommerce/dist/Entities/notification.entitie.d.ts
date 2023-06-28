export declare type notificationTypes = {
  _id?: string;
  title: string;
  message: string;
  direction: "allStores" | "allClients" | "client" | "store" | "global";
  directionId: string[];
  owner: string;
  path: string;
  openPopup: boolean;
  startDate: Date;
  isFixed: boolean;
  endDate: Date;
  isRead: string[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
