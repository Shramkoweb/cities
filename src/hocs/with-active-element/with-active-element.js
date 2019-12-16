import React from "react";

const withActiveElement = (Component) => {
  class WithActiveElement extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {activeElement: null};

      this.handleElementSelect = this.handleElementSelect.bind(this);
    }

    handleElementSelect(id) {
      this.setState({
        activeElement: id
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeElement={this.state.activeElement}
          onSelect={this.handleElementSelect}
        />
      );
    }
  }

  WithActiveElement.propTypes = {};

  return WithActiveElement;
};

export default withActiveElement;
