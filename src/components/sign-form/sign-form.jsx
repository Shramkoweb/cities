import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Operation} from "../../reducer/user/user";

const SignForm = (props) => {
  const {onChangeEmail, onChangePassword, emailValue, passwordValue, onFetchLoginData} = props;

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    onFetchLoginData({
      email: emailValue,
      password: passwordValue
    });
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          onChange={onChangeEmail}
          value={emailValue}
          className="login__input form__input"
          name="email"
          placeholder="Email"
          type="email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          onChange={onChangePassword}
          value={passwordValue}
          className="login__input form__input"
          name="password"
          placeholder="Password"
          type="password"
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFetchLoginData: (data) => dispatch(Operation.fetchAuthData(data))
});

SignForm.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onFetchLoginData: PropTypes.func.isRequired
};


export {SignForm};
export default connect(null, mapDispatchToProps)(SignForm);
