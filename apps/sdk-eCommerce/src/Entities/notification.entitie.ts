export type notificationTypes = {
  _id?: string;
  title: string;
  message: string;
  direction: "allStores" | "allClients" | "client" | "store" | "global";
  directionId: string[];
  path: string;
  startDate: Date;
  isFixed: boolean;
  endDate: Date;
  isRead: string[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
