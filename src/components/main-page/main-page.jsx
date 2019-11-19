import React from "react";
import PageLayout from "../page-layout/page-layout";
import Catalog from "../catalog/catalog";
import Header from "../header/header";
import {USER_DATA} from "../../mocks/user-data";

const MainPage = () => {
  return (
    <PageLayout pageClasses={[`page`, `page--gray`, `page--main`]}>
      <Header user={USER_DATA}/>
      <Catalog/>
    </PageLayout>
  );
};

export default MainPage;
