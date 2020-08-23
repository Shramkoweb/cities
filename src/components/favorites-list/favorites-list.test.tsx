import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import {FavoritesList} from "./favorites-list";

jest.mock(`../place-card/place-card.tsx`, () => jest.fn().mockReturnValue(null));

configure({adapter: new Adapter()});

it(`FavoritesList is renders correctly`, () => {
  const favorites = shallow(
    <FavoritesList
      history={{}}
      onChangeCity={jest.fn()}
      cities={[`Amsterdam`]}
      favorites={{'Amsterdam': []}}
      city={1}/>
  );

  expect(favorites).toMatchSnapshot();
});
