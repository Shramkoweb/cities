import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SignForm from "../sign-form/sign-form";
import PageLayout from "../page-layout/page-layout";
import Header from "../header/header";
import withInputsChange from "../../hocs/with-form-state/with-inputs-change";
import {getActiveCity} from "../../reducer/data/selector";

const SignFormWrapped = withInputsChange(SignForm);

const Sign = (props) => {
  const {currentCity} = props;

  return (
    <PageLayout pageClasses={[`page--gray`, `page--login`]}>

      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <SignFormWrapped/>

          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{currentCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
};

Sign.propTypes = {
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: getActiveCity(state),
});

export {Sign};
export default connect(mapStateToProps)(Sign);
