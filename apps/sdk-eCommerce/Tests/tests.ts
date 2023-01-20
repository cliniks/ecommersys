import { log } from "../src/logs";
import SDK, { User, Seller, Admin, Global } from "../src";
console.clear();

const sdk = new SDK();

export const tests = async () => {
  log("Iniciando SDK").clear();

  log("Connectando AppToken");

  const AppTokenConnect = await sdk.connect({
    appToken: "OWRQ8rileuqe2o9fo23FO9FWPFU9W1ofuO2FB23OFU",
  });

  if (AppTokenConnect.isError)
    return console.log("não foi possível autenticar o token da aplicação");

  // await sdk.connectUser(
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiMjM2MjlhNDBjMDJjYmRlOTdhM2MiLCJzZWxsZXIiOiI2M2FiMjQxODlhNDBjMDJjYmRlOTdhNTAiLCJpYXQiOjE2NzIxNjAyODJ9.RwEEkMTwJCmJEEnvKIfNIEz3ctGPj9mVNUTbSaFtFto"
  // );

  // const authClient = await User.account.auth(
  //   "valgusto2000@hotmail.com",
  //   "123153"
  // );

  // if (authClient.isError)
  // return console.log("não foi possível autenticar usuário");

  const getUser = await User.account.getMyUser();

  if (getUser.isError)
    return console.log("não foi possível requisitar o usuário");

  const myUser = getUser.isSuccess;

  console.log(myUser);

  // const updateUserInfo = await User.account.updateUserInfo(`${myUser._id}`, {
  //   name: "Victor",
  // });

  // if (updateUserInfo.isError)
  //   return console.log("não foi possível atualizar o usuário");

  // await Global.emailSender.sendEmailToken({
  //   email: `${myUser.userInfo.email}`,
  // });

  // await User.confirmEmailToken({
  //   email: `${myUser.userInfo.email}`,
  //   code: 3085,
  // });

  // console.log(JSON.stringify(sdk, null, 5));

  // console.log(JSON.stringify({ User, Seller, Admin, Global }, null, 4));
};

tests();
