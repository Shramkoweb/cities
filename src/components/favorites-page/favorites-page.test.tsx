import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import {FavoritesPage} from "./favorites-page";

configure({adapter: new Adapter()});

jest.mock(`../page-layout/page-layout.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../place-card/place-card.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../header/header.tsx`, () => jest.fn().mockReturnValue(null));

describe(`FavoritesPage should correctly render`, () => {
  it(`FavoritesPage is renders correctly`, () => {
    const favorites = shallow(
      <FavoritesPage
        cities={[`Amsterdam`]}
        favorites={{}}
        onLoadFavorites={jest.fn()}
      />
    );

    expect(favorites).toMatchSnapshot();
  });

  it(`FavoritesPage empty page renders correctly`, () => {
    const favorites = shallow(
      <FavoritesPage
        cities={[]}
        favorites={{}}
        onLoadFavorites={jest.fn()}
      />
    );

    expect(favorites).toMatchSnapshot();
  });
});
