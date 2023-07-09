import axios from "axios"

const API_KEY = import.meta.env.VITE_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL : BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  }
})

export const getDogs = async () => {
  const response = await instance.get(`/images/search`, {
    params: {
      format: "json",
      limit: 10,
      has_breeds: true,
      order : "ASC"
    },
  });
  return response.data;
};
