import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8000/wp-json/wp/v2',
  timeout: 8000,
});

export default api;
