import axios from "axios";

const Api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://api.ikiradev.com",
});

Api.interceptors.request.use((config: any) => {
  const token = process.env.ASASS_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      access_token: token.trim(),
      ["Content-Type"]: "application/json; charset=utf-8",
      ["Access-Control-Allow-Headers"]: "Content-Type",
      ["Access-Control-Allow-Origin"]: "*",
      ["Access-Control-Allow-Methods"]: "OPTIONS,POST,GET,PUT,PATCH,DELETE",
    };
    return config;
  }
  return config;
});

const AsassAPI = axios.create({
  baseURL: process.env.ASASS_HOST,
});

AsassAPI.interceptors.request.use((config: any) => {
  const token = process.env.ASASS_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      access_token: token.trim(),
      ["Content-Type"]: "application/json; charset=utf-8",
      ["Access-Control-Allow-Headers"]: "Content-Type",
      ["Access-Control-Allow-Origin"]: "*",
      ["Access-Control-Allow-Methods"]: "OPTIONS,POST,GET,PUT,PATCH,DELETE",
    };
    return config;
  }
  return config;
});

export { AsassAPI, Api };
