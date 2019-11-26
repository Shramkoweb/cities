import React from "react";
import PageLayout from "../page-layout/page-layout";
import Catalog from "../catalog/catalog";
import Header from "../header/header";
import {USER_DATA} from "../../mocks/user-data";
import Sign from "../sign/sign";
import {getActiveCity, getFilteredOffers} from "../../reducer/data/selector";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selector";

const MainPage = (props) => {
  const {isAuthorizationRequired} = props;

  return (
    <PageLayout pageClasses={[`page`, `page--gray`, `page--main`]}>
      <Header user={USER_DATA}/>

      {isAuthorizationRequired ? <Catalog/> : <Sign/>}
    </PageLayout>
  );
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
