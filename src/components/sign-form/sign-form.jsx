import React from "react";
import {connect} from "react-redux";

import {Operation} from "../../reducer/user/user";

const SignForm = (props) => {
  const {onChangeEmail, onChangePassword, emailValue, passwordValue} = props;

  const handleSubmitForm = (evt) => {
    evt.preventDefault()

    const {onLogIn} = props;
    onLogIn({
      email: emailValue,
      password: passwordValue
    });
  };

  return (
    <form onSubmit={handleSubmitForm} className="login__form form" action="#" method="post">
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
  onLogIn: (data) => dispatch(Operation.fetchAuthData(data))
});


export {SignForm};
export default connect(null, mapDispatchToProps)(SignForm);
