import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ReviewForm} from './review-form.jsx';

configure({adapter: new Adapter()});

it(`Review form renders correctly`, () => {
  const reviewForm = shallow(<ReviewForm
    onInputChange={jest.fn()}
    rating={5}
    review={`Some test`}
    id={5}
    onSendForm={jest.fn()}
    onFormReset={jest.fn()}
    isValid={true}
    formRef={{}}
  />);

  expect(reviewForm).toMatchSnapshot();
});
