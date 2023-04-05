import { User } from "../../entities";
import { SalesRepository, UsersRepository } from "../../repositories";

const usersRepo = UsersRepository;
const salesRepo = SalesRepository;

export const getMyClients = async (user: User) => {
  const getUser = async (id: string) =>
    await usersRepo.getOne({ key: "_id", value: id });

  console.log(user.storeId);

  const getMySales = await salesRepo.getAll({
    size: 100,
    page: 0,
    filter: { key: "storeIds", value: user.storeId },
  });

  let clientInfo: any = [];

  for (let i = 0; i < getMySales.result.length; i++) {
    let client: any = {};

    const sale = getMySales.result[i];

    const mySells = sale.sellers.filter(
      (item) => item.storeId === user.storeId
    );

    const myProducts = mySells.map((item: any) => {
      const products = item.products.filter(
        (item: any) => item.owner === user.storeId.toString()
      );
      return {
        products,
        orderId: item._id,
        total: products.reduce((a: number, b: any) => +a + +b.totalValue, 0),
      };
    });

    const clientData = await getUser(sale.userId);

    client["clientId"] = clientData._id.toString();
    client["clientName"] = clientData.userInfo.name;
    client["clientImg"] = clientData.img;
    client["clientEmail"] = clientData.userInfo.email;
    client["clientPhone"] = clientData.userInfo.phone || "";
    client["melhorEnvioID"] = clientData.melhorEnvioID;
    client["gatewayPagId"] = clientData.gatewayPagId;
    client["totalBuyed"] = myProducts.reduce(
      (a: number, b: any) => +a + +b.total,
      0
    );
    client["orders"] = myProducts;

    const containClient = clientInfo.find(
      (item: any) => item.clientId === clientData._id.toString()
    );

    if (containClient) {
      const clientIndex = clientInfo.findIndex(
        (item: any) => item.clientId === containClient.clientId
      );
      clientInfo[clientIndex].orders?.push(...client.orders);
      clientInfo[clientIndex].totalBuyed += client.totalBuyed;
      continue;
    }
    clientInfo.push(client);
  }
  return clientInfo;
};
