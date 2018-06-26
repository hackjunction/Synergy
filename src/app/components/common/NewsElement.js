import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ElementGridElement from './ElementGridElement';
import styles from './NewsElement.c.scss';

export default class NewsElement extends Component {
  // render
  render() {
    const { post } = this.props;
    if (post) {
      return (
        <ElementGridElement
          link={post.link}
          background={post.image}
          hoverStyle={styles.hover}
          insideStyle={styles.inside}
          outside
        />
      );
    } else return <div />;
  }
}

// prop checks
NewsElement.propTypes = {
  post: PropTypes.object.isRequired
};
