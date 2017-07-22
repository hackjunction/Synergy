import axios from 'axios';
import convert from 'xml-js';
import R from 'ramda';

const PUBLICATION_NAME = 'hack-junction';

const mediumFeedClient = axios.create({
  baseURL: 'https://medium.com/feed',
  timeout: 5000,
});

const transformPublicationPosts = R.pipe(
  rssData => {
    return convert.xml2js(rssData, {
      compact: true,
      trim: true,
      nativeType: true,
      alwaysArray: true,
      ignoreComment: true,
      alwaysChildren: false,
    });
  },
  R.view(R.lensPath(['rss', '0', 'channel', '0', 'item'])),
  R.map(post => ({
    title: R.path(['title', '0', '_cdata', '0'], post),
    link: R.path(['link', '0', '_text', '0'], post),
    creator: R.path(['dc:creator', '0', '_cdata', '0'], post),
    publishedAt: R.path(['pubDate', '0', '_text', '0'], post),
    updatedAt: R.path(['atom:updated', '0', '_text', '0'], post),
    content: R.path(['content:encoded', '0', '_cdata', '0'], post),
    categories: R.pipe(R.path(['category']), R.map(R.path(['_cdata', '0'])))(
      post,
    ),
  })),
);

export const getPosts = () => {
  return mediumFeedClient
    .get(`/${PUBLICATION_NAME}`)
    .then(({ data }) => transformPublicationPosts(data));
};
