import axios from 'axios';
import { WORDPRESS_BASE_URL } from '../config';

const wordpressApiClient = axios.create({
  baseURL: `${WORDPRESS_BASE_URL}/wp-json/wp/v2`,
  timeout: 50000,
});

wordpressApiClient.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

export const getPosts = () => wordpressApiClient.get('/posts');

export const getPartners = () => wordpressApiClient.get('/posts');

export const getTracks = () =>  {
  return wordpressApiClient.get('/posts?_embed&categories=2')
    .then(tracks => tracks.data)
    .then(tracks => {
      return tracks.map(track => {
        return {
          title: track.title.rendered,
          content: track.content.rendered,
          image: track.acf.image,
          challenges: track.acf.challenges? track.acf.challenges.map(challenge => {
            return {
              title: challenge.post_title,
              content: challenge.post_content
            }
          }) : [],
          main_partners: track.main_partners,
          partners: track.partners,
          slug: track.slug
        }
      })
    })
};
