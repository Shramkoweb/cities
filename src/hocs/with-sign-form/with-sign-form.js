import React, {PureComponent} from "react";

export const withSignForm = (Component) => {
  class WithSignForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
    }

    _handleChangeEmail(evt) {
      this.setState({email: evt.target.value});
    }

    _handleChangePassword(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeEmail={this._handleChangeEmail}
          onChangePassword={this._handleChangePassword}
          emailValue={this.state.email}
          passwordValue={this.state.password}
        />
      );
    }
  }

  return WithSignForm;
};

export default withSignForm;
