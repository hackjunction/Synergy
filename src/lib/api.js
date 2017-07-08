import axios from "axios";

const api = axios.create({
  baseURL: 'https://some-domain.com',
  timeout: 8000,
});

export default api;
