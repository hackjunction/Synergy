import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Calendar.c.scss';
import TitleMod from './TitleMod';
import CalendarGrid from './CalendarGrid';
import CalendarCategoryButton from './CalendarCategoryButton';
import TopNav from './TopNav';
import Footer from './landing/Footer';

class Calendar extends Component {
  componentWillMount() {
    if (this.props.calendarEvents.length == 0) {
      this.props.getCalendarEvents();
    }
  }

  render() {
    const { calendarEvents, calendarCategories } = this.props;
    var categories = [].concat.apply(
      [],
      calendarEvents.map(calendarEvent => {
        return calendarEvent.category;
      })
    );
    categories = Array.from(new Set(categories)); //remove duplicates
    categories = categories.sort(); //remove duplicates
    console.log(categories);

    return (
      <div>
        <Grid className={styles.grid} fluid>
          <TopNav />
          <Row className={styles.background_top} center="xs">
            <TitleMod title="CALENDAR" />
          </Row>
          <Row center="xs">
            {categories.map(category => {
              return <CalendarCategoryButton category={category} />;
            })}
          </Row>
          <CalendarGrid categories={calendarCategories} />
        </Grid>
        <Footer />
      </div>
    );
  }
}

Calendar.propTypes = {
  calendarEvents: PropTypes.array,
  calendarCategories: PropTypes.object,
  getCalendarEvents: PropTypes.func
};

function mapStateToProps(state) {
  return {
    calendarEvents: state.calendarEvents || [],
    calendarCategories: state.calendarCategories || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCalendarEvents() {
      dispatch({ type: 'GET_CALENDAREVENTS' });
    },
    toggleCategory(category) {
      dispatch({ type: 'CALENDARCATEGORY_TOGGLE', category });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
