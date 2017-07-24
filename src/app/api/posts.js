import clientApi from '../../lib/clientApi';
import api from '../../lib/api';

export default class ApiPosts {
  // get a list of posts
  // NOTE should be api as well but the request is pending
  static getPost() {
    return clientApi.get('/posts');
  }

  static getMediumPost() {
    return api.get('/medium/posts');
  }

  static getTracks() {
    return clientApi.get('/posts?categories=2');
  }

  static getChallenges() {
    return clientApi.get('/posts?categorie=4');
  }
}
