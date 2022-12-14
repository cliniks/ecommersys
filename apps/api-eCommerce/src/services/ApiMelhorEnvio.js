const { MeApi } = require("./axiosInstances");

const ApiME = {
  createStore: async (createdStore, storeModel) => {
    try {
      const MEObject = {
        name: `${data.userInfo.name} ${data.userInfo.lastName}`,
        email: data.userInfo.email,
        description: `${createdStore.name} owner - ${data.userInfo.name} ${data.userInfo.lastName}`,
        company_name: createdStore.name,
        document: createdStore.storeInfo.cnpj,
        state_register: data.userInfo.cpf,
      };
      const response = await MeApi.post("/seller/register", MEObject);
      const { data } = response;
      console.log(data);
      const updateStoreModel = await storeModel.findByIdAndUpdate(createdStore._id, { melhorEnvioID: data.id });
      return updateStoreModel;
    } catch (err) {
      console.log("apiME createStore", err);
      return { err };
    }
  },
  addClient: async (obj, userModel) => {
    try {
      const response = await MeApi.post("/seller/register", obj);
      const { data } = response;
      console.log(data);
      const updateStoreModel = await userModel.findByIdAndUpdate(createdStore._id, { melhorEnvioID: data.id });
      return updateStoreModel;
    } catch (err) {
      console.log("apiME addClient", err);
      return { err };
    }
  },
};

exports.ApiME = ApiME;
