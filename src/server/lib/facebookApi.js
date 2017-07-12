import { Facebook } from 'fb';
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '../config';

const fb = new Facebook({
  appId: FACEBOOK_APP_ID,
  appSecret: FACEBOOK_APP_SECRET,
});

const getPagePosts = () =>
  ;
