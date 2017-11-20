import Instagram from 'node-instagram';
import { INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET, INSTAGRAM_ACCESS_TOKEN } from '../config';

const ig = new Instagram({
  clientId: INSTAGRAM_CLIENT_ID,
  clientSecret: INSTAGRAM_CLIENT_SECRET,
  accessToken: INSTAGRAM_ACCESS_TOKEN
});

export default ig;
