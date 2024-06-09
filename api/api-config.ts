import axios, { AxiosInstance } from "axios";

export const apiUrl = "https://notion-api.splitbee.io/v1";

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
