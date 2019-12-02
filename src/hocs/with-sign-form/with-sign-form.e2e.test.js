import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
import withSignForm from "./with-sign-form";
import {SignForm} from "../../components/sign-form/sign-form";

Enzyme.configure({adapter: new Adapter()});

describe(`WithSignForm wrapper work correct`, () => {
  const FormWrapped = withSignForm(SignForm);

  const wrappedComponent = mount(
      <FormWrapped
        sendAuthData={jest.fn()}
      />
  );

  const emailInput = wrappedComponent.find(`.login__input`).first();
  const passwordInput = wrappedComponent.find(`.login__input`).at(1);

  it(`should render correctly`, () => {
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  });

  it(`change state email on input change`, () => {
    emailInput.simulate(`change`, {target: {value: `shramko.web@yahoo.com`, name: `email`}});

    expect(wrappedComponent.state().email).toEqual(`shramko.web@yahoo.com`);
  });

  it(`change state password on input change`, () => {
    passwordInput.simulate(`change`, {target: {value: `qwerty`, name: `password`}});

    expect(wrappedComponent.state().password).toEqual(`qwerty`);
  });
});
