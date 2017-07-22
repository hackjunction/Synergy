import express from 'express';
import * as wordpressApi from './lib/wordpressApi';
import facebookClient from './lib/facebookClient';
import * as mediumClient from './lib/mediumClient';
import instagramClient from './lib/instagramApi';

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

apiRouter.get('/ig/images', (req, res) => {
  instagramClient.get('users/self/media/recent').then(pictures => {
    res.json(pictures.data.slice(0, 13).map(picture => {
      return {
        url:picture.images.standard_resolution.url,
      //  caption:picture.caption.text,
        link:picture.link
      }
    }));
  })
});

apiRouter.get('/medium/posts', (req, res) => {
  mediumClient
    .getPosts()
    .then((posts) => {
      res.json(posts);
    });
});

export default apiRouter;
