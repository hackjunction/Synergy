import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Calendar.c.scss';

// import Challenge from './challenges/Challenge';

class CalendarCategoryButton extends Component {
  render() {
    var category = this.props.category;
    var toggle = function() {
      this.props.toggleCategory(category);
    }.bind(this);

    return (
      <Col xs={4} md={3} onClick={toggle}>
        <div>{category.toUpperCase()}</div>
      </Col>
    );
  }
}

CalendarCategoryButton.propTypes = {
  category: PropTypes.string,
  toggleCategory: PropTypes.func
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCategory(category) {
      dispatch({ type: 'CALENDARCATEGORY_TOGGLE', category });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarCategoryButton);
