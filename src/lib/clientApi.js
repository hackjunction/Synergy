import axios from 'axios';

const clientApi = axios.create({
  baseURL: 'https://staging.hackjunction.com/wp-json/wp/v2',
  timeout: 20000
});

export default clientApi;
