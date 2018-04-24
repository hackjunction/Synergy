import React from 'react';
import { Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './Contact.c.scss';
// import Challenge from './challenges/Challenge';

function ContactCard(props) {
  return (
    <Col xs={12} sm={6} md={3} className={styles.card}>
      <img className={styles.img} src={props.image} alt="" />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.email}>{props.email}</p>
    </Col>
  );
}
ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};
export default ContactCard;
