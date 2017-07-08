import express from "express";
import * as wordpressApi from "src/server/lib/wordpressApi";

const apiRouter = express.Router();

apiRouter.get("/posts", (req, res) => {
  wordpressApi
    .getPosts()
    .then(({data}) => {
      res.json(data);
    })
});

export default apiRouter;
