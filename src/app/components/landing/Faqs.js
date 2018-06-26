import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import styles from './Faqs.c.scss';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import FaqSection from './FaqSection';

class Faqs extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch({ type: 'GET_FAQS' });
  }

  // render
  render() {
    const { faqs } = this.props;
    var elements = faqs.map((faq, i) => {
      return (
        <Col key={i} xs={12} md={6} className={styles.faqCell}>
          <FaqSection question={faq.question}>
            <div dangerouslySetInnerHTML={{ __html: faq.answer.rendered }} />
          </FaqSection>
        </Col>
      );
    });
    return (
      <Scroll.Element name="faqs">
        <Block className={styles.block}>
          <BlockHeader title="FREQUENTLY ASKED QUESTIONS">
            <p>Got questions? Don’t worry, we have the answers.</p>
          </BlockHeader>
          <Row>{elements.reverse()}</Row>
        </Block>
      </Scroll.Element>
    );
  }
}

// prop checks
Faqs.propTypes = {
  dispatch: PropTypes.func,
  faqs: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  return {
    faqs: state.faqs || []
  };
}

export default connect(mapStateToProps)(Faqs);
