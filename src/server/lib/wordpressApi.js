import axios from 'axios';
import { WORDPRESS_BASE_URL } from '../config';

const wordpressApiClient = axios.create({
  baseURL: `${WORDPRESS_BASE_URL}/wp-json/wp/v2`,
  timeout: 5000,
});

wordpressApiClient.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

export const getPosts = () => wordpressApiClient.get('/posts');
