import axios from "axios";

const clientApi = axios.create({
  baseURL: "/api",
  timeout: 8000,
});

export default clientApi;
