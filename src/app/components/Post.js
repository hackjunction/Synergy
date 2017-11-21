import React from 'react';
import { Grid } from 'react-flexbox-grid';
import PostList from './common/PostList';
import MediumList from './common/MediumList';
import ChallengesList from './common/ChallengesList';
import TracksList from './common/TracksList';

const Post = () => (
  <Grid fluid>
    <PostList />
    <MediumList />
    <ChallengesList />
    <TracksList />
  </Grid>
);

export default Post;
