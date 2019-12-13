import React, {PureComponent} from "react";
// TODO переименовать папку этого ХОК-а

export const withInputsChange = (Component) => {
  class WithInputsChange extends PureComponent {
    constructor(props) {
      super(props);

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt) {
      this.setState({[evt.target.name]: evt.target.value});
    }

    _resetState() {
      const initialState = {};
      this.setState({});
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onResetState={this._resetState}
          onInputChange={this._handleInputChange}
        />
      );
    }
  }

  return WithInputsChange;
};

export default withInputsChange;
