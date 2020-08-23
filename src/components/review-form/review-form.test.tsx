import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";import {ReviewForm} from './review-form';

configure({adapter: new Adapter()});

it(`Review form renders correctly`, () => {
  const reviewForm = shallow(<ReviewForm
    onInputChange={jest.fn()}
    rating={`5`}
    review={`Some test`}
    isReviewSent={true}
    onUpdateForm={jest.fn()}
    isReviewSending={true}
    id={5}
    onSendForm={jest.fn()}
    onFormReset={jest.fn()}
    isValid={true}
  />);

  expect(reviewForm).toMatchSnapshot();
});
