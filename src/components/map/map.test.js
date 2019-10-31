import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {OFFERS} from "../../mocks/offers";
import {mount} from 'enzyme';

const citiesCoordinates = OFFERS.map((it) => it.coordinates);


it('test map', () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const wrapper = mount(<Map/>, {attachTo: div});
});
