import React from 'react';
import { Grid } from 'react-flexbox-grid';
import PostList from './common/PostList';
import MediumList from './common/MediumList';

const Post = () =>
  <Grid fluid>
    <PostList />
    <MediumList />
  </Grid>;

export default Post;
