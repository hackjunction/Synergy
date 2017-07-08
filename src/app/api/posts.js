import clientApi from "../../lib/clientApi";

export default class ApiPosts {
  // get a list of posts
  static getPost() {
    return clientApi.get("/posts");
  }
}
