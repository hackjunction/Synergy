import React from 'react';

// const FaqSection = () => (
//   <div>This is my awesome about page</div>
// );
class FaqSection extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log("isOpen", this.state.isOpen)
  }

  render() {
    const rootClass = this.state.isOpen
      ? "faq_section open"
      : "faq_section";

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
