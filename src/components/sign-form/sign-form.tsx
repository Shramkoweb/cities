import * as React from "react";
import {connect} from "react-redux";

import {Operation} from "../../reducer/user/user";
import {history} from "../../index";
import {PageAddress} from "../../constants";
import {getError} from "../../reducer/user/selector";

const SignForm = (props) => {
  const {onInputChange, sendAuthData, email, password, error} = props;

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    sendAuthData({
      email,
      password
    });
    history.push(PageAddress.MAIN);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label htmlFor="login-email" className="visually-hidden">E-mail</label>
        <input
          onChange={onInputChange}
          value={email || ``}
          id="login-email"
          className="login__input form__input"
          name="email"
          placeholder="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label htmlFor="login-password" className="visually-hidden">Password</label>
        <input
          onChange={onInputChange}
          id="login-password"
          className="login__input form__input"
          value={password || ``}
          name="password"
          placeholder="Password"
          type="password"
          required
        />
      </div>
      <span>{error}</span>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendAuthData: (data) => dispatch(Operation.sendAuthData(data))
});

export {SignForm};
export default connect(mapStateToProps, mapDispatchToProps)(SignForm);
