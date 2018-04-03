import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Block from './viewBlocks/Block';
import styles from './TitleMod.c.scss';

const TitleMod = props => (
  <Block className={styles.block} contentClassName={styles.content}>
    <Row className={styles.block}>
      <Col>
        <h1>{props.title ? props.title : 'JUNCTION'}</h1>
        {props.content ? (
          props.content.map(text => <p className={styles.paragraph}> {text} </p>)
        ) : (
          <p className={styles.paragraph} />
        )}
      </Col>
    </Row>
  </Block>
);
TitleMod.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array
};

export default TitleMod;
