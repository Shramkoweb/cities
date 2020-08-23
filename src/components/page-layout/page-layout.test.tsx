import * as React from "react";
import * as renderer from "react-test-renderer";

import PageLayout from "./page-layout";

jest.mock(`../review-form/review-form.tsx`, () => jest.fn().mockReturnValue(null));

const children = <div className="children-component"/>;

it(`PageLayout component render correct`, () => {

  const layout = renderer
    .create(
      <PageLayout pageClasses={[`page--gray`, `page--main`]}>
        {children}
      </PageLayout>
    );

  expect(layout).toMatchSnapshot();
});
