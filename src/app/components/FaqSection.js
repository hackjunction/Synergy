import React from "react";
import PropTypes from "prop-types";

class FaqSection extends React.Component {
  static propTypes = {
    question: PropTypes.string,
    children: PropTypes.string,
  };

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const rootClass = this.state.isOpen ? "faq_section open" : "faq_section";

    return (
      <div onClick={this.toggle} className={rootClass}>
        <div>
          {this.props.question}
        </div>
        <div className="articlewrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FaqSection;
