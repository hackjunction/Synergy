import express from 'express';
import * as wordpressApi from './lib/wordpressApi';
import facebookClient from './lib/facebookClient';

const apiRouter = express.Router();

apiRouter.get('/posts', (req, res) => {
  wordpressApi
    .getPosts()
    .then(({ data }) => {
      res.json(data);
    });
});

apiRouter.get('/fb/posts', (req, res) => {
  facebookClient.api('/hackjunction', (fbRes) => {
    res.json(fbRes);
  });
});

export default apiRouter;
