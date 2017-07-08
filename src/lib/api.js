import axios from "axios";
import {API_BASE_URL} from "src/lib/config";

const api = axios.create({
  baseURL: `${API_BASE_URL}/wp-json/wp/v2`,
  timeout: 8000,
});

export default api;
