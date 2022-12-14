import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhostL:3001",
});

Api.interceptors.request.use((config) => {
  const token = process.env.ASASS_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      access_token: token.trim(),
    };
    return config;
  }
});

const AsassAPI = axios.create({
  baseURL: process.env.ASASS_HOST,
});

AsassAPI.interceptors.request.use((config) => {
  const token = process.env.ASASS_TOKEN;
  if (config.headers === undefined) config.headers = {};

  if (token) {
    config.headers = {
      Accept: "application/json",
      access_token: token.trim(),
    };
    return config;
  }
});

export { AsassAPI, Api };
