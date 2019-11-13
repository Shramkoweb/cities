import React from "react";

const withActiveElement = (Component) => {
  class WithActiveElement extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {active: `Amsterdam`};

      this.elementSelectHandler = this.elementSelectHandler.bind(this);
    }

    elementSelectHandler(index) {
      this.setState({
        active: index
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          active={this.state.active}
          onSelect={this.elementSelectHandler}
        />
      );
    }
  }

  WithActiveElement.propTypes = {};

  return WithActiveElement;
};

export default withActiveElement;
