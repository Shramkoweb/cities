import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../page-layout/page-layout";
import Catalog from "../catalog/catalog";
import Header from "../header/header";
import {USER_DATA} from "../../mocks/user-data";

const MainPage = (props) => {
  const {offers, citiesCoordinates, leaflet} = props;

  return (
    <PageLayout pageClasses={[`page`, `page--gray`, `page--main`]}>
      <Header user={USER_DATA}/>
      <Catalog offers={offers} citiesCoordinates={citiesCoordinates} leaflet={leaflet}/>
    </PageLayout>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MainPage;
