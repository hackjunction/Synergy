import api from "src/lib/api";

export default class ApiPosts {
  // get a list of posts
  static getPost() {
    return api.get("/wp/v2/posts");
  }
}
