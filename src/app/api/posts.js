import clientApi from '../../lib/clientApi';
import api from '../../lib/api';

export default class ApiPosts {
  // get a list of posts
  static getPost() {
    return clientApi.get('/posts');
  }

  static getMediumPost() {
    return api.get('/medium/posts');
  }
}
