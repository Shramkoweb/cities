import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUserData} from "../../reducer/user/selector";
import {REQUEST_URL} from "../../constants";

// TODO Адаптер для данных пользователя

const Header = ({isAuthorizationRequired, userData}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={isAuthorizationRequired ? {} : {backgroundImage: `url(${REQUEST_URL.BASE}${userData.avatar})`}}
                  >
                  </div>
                  <span className="header__user-name user__name">
                    {isAuthorizationRequired ? `Sign In` : userData.email}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
};


const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
  userData: getUserData(state)
});


export {Header};
export default connect(mapStateToProps)(Header);
