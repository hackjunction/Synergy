import axios from "axios";
export default class ApiPosts {
  // get a list of posts
  static getPost() {
    return axios.get("http://localhost:8000/wp-json/wp/v2/posts");
  }
}
