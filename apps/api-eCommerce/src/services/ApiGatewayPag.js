const { GPApi } = require("./axiosInstances");

const ApiGP = {
  createStore: async (obj, storeId, storeModel) => {
    try {
      const response = await GPApi.post("/seller/addStore", obj);
      const { data } = response;
      const updateStoreModel = await storeModel.findByIdAndUpdate(storeId, {
        gatewayPagId: data.id,
        gatewayPagApiKey: data.apiKey,
      });
      return updateStoreModel;
    } catch (err) {
      console.log("asaas addClient", err);
      return { err };
    }
  },
  addClient: async (obj, userModel) => {
    try {
      const response = await GPApi.post("/client/newClient", obj);
      const { data } = response;
      // const updateStoreModel = await userModel.findByIdAndUpdate(obj._id, {
      //   gatewayPagId: data.id,
      //   // gatewayPagApiKey: data.apiKey,
      // });
      return data;
    } catch (err) {
      console.log("asaas addClient", err);

      return { err };
    }
  },
};

exports.ApiGP = ApiGP;
