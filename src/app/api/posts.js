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
    return api.get('/tracks');
  }

  static getFaqs() {
    return api.get('/faqs');
  }

  static getChallenges() {
    return api.get('/challenges');
  }
  static getChallenge(id) {
    //console.log("id: ", id);
    return api.get('/challenge?id=' + id);
  }

  static getJobs() {
    return api.get('/jobs');
  }

  static getPartners(year) {
    return api.get('/partners' + (year ? '?year=' + year : ''));
  }
}
