import React from "react";
import renderer from "react-test-renderer";
import PageLayout from "./page-layout";
import Header from "../header/header";
import {USER_DATA} from "../../mocks/user-data";
import Catalog from "../catalog/catalog";
import {OFFERS} from "../../mocks/offers";

it(`PageLayout component render correct`, () => {

  const layout = renderer
    .create(
        <PageLayout pageClasses={[`page`, `page--gray`, `page--main`]}>
          <Header user={USER_DATA}/>
          <Catalog offers={OFFERS}/>
        </PageLayout>
    )
    .toJSON();

  expect(layout).toMatchSnapshot();
});
