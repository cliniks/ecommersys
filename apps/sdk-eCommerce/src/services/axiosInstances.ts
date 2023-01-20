import axios from "axios";
import { configInterceptors } from "../configs/axiosInterceptors";

const apiEcommerce = axios.create({
  // baseURL: "http://localhost:3010",
  baseURL: "https://api.ikiradev.com",
  headers: configInterceptors,
});

export { apiEcommerce };

export const updateInterceptor = async (interceptors: {
  [key: string]: string;
}) => {
  return apiEcommerce.interceptors.request.use((config) => {
    if (!config.headers) config.headers = configInterceptors;
    config.headers = {
      ...configInterceptors,
      ...config.headers,
      ...interceptors,
    };
    return config;
  });
};
