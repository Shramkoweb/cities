import React, {PureComponent} from "react";

export const withSignForm = (Component) => {
  class WithSignForm extends PureComponent {
    constructor(props) {
      super(props);

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt) {
      this.setState({[evt.target.name]: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onInputChange={this._handleInputChange}
        />
      );
    }
  }

  return WithSignForm;
};

export default withSignForm;
