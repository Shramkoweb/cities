import React from "react";
import SignForm from "../sign-form/sign-form";
import PageLayout from "../page-layout/page-layout";
import Header from "../header/header";
import {witSignForm} from "../../hocs/with-sign-form/wit-sign-form";

const SignFormWrapped = witSignForm(SignForm);

const Sign = () => {
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
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
};

export default Sign;
