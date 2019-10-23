import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      <MainPage offers={offers}/>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};
