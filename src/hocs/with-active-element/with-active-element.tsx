import * as React from "react";
import {Subtract} from "utility-types";


interface State {
  activeElement?: any,
}

interface InjectedProps {
  activeElement?: any,
}

const withActiveElement = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveElement extends React.PureComponent<T, State> {
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

  return WithActiveElement;
};

export default withActiveElement;
