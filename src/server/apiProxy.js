import express from 'express';
import * as wordpressApi from './lib/wordpressApi';
import facebookClient from './lib/facebookClient';

const FACEBOOK_PAGE = 'hackjunction';

const apiRouter = express.Router();

apiRouter.get('/posts', (req, res) => {
  wordpressApi
    .getPosts()
    .then(({ data }) => {
      res.json(data);
    });
});

apiRouter.get('/fb/posts', (req, res) => {
  facebookClient.api(`/${FACEBOOK_PAGE}`, (fbRes) => {
    res.json(fbRes);
  });
});

apiRouter.get('/fb/events', (req, res) => {
  facebookClient.api(
    `/${FACEBOOK_PAGE}/events`,
    {
      fields: [
        'id',
        'name',
        'description',
        'cover',
        'place',
        'start_time',
        'end_time',
      ],
    },
    (fbRes) => {
      res.json(fbRes.data);
    }
  );
});

export default apiRouter;
