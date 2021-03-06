import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Job.c.scss';
import Job from './Job';
import TitleMod from './TitleMod';
import TopNav from './TopNav';
import Footer from './landing/Footer';

class AllJobs extends Component {
  componentWillMount() {
    if (this.props.jobs.length === 0) {
      this.props.getJobs();
    }
  }

  render() {
    const { jobs } = this.props;
    return (
      <div>
        <Grid className={styles.hero} fluid>
          <TopNav />
          <TitleMod
            title="Open positions from our partners"
            content={[
              'Want to see your job listing here? Contact us at partnerships@hackjunction.com to get on board!'
            ]}
          />
          {jobs.map((job, i) => {
            return <Job job={job} key={i} />;
          })}
          <Footer />
        </Grid>
      </div>
    );
  }
}

AllJobs.propTypes = {
  jobs: PropTypes.array,
  getJobs: PropTypes.func
};

function mapStateToProps(state) {
  return {
    jobs: state.jobs || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getJobs() {
      dispatch({ type: 'GET_JOBS' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);
