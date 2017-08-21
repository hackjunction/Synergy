import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
});

export const getEvents = () => {
  return api.get('/fb/events');
};

export default api;
