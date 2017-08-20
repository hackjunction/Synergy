import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 8000,
});

export const getEvents = () => {
  return api.get('/fb/events');
};

export default api;
