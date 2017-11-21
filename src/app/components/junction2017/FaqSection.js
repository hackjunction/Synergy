import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FaqSection.c.scss';

class FaqSection extends React.Component {
  static propTypes = {
    question: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  };

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const containerClasses = classNames({
      [styles.faqSection]: true,
      [styles.open]: this.state.isOpen
    });

    return (
      <div onClick={this.toggle} className={containerClasses}>
        <div className={styles.faqQuestion}>
          <span className={styles.openButton} />
          {this.props.question}
        </div>
        <div className={styles.faqAnswer}>
          <div className={styles.faqAnswerText}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default FaqSection;
