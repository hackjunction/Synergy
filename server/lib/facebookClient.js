import FB from 'fb';
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '../config';

const fb = FB.withAccessToken(`${FACEBOOK_APP_ID}|${FACEBOOK_APP_SECRET}`);

export default fb;
