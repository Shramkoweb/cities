import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";
import Constants from "../../constants";
import TabsLink from "../tabs-link/tabs-link";


class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.changeCity = this.changeCity.bind(this);
  }

  changeCity(city) {
    this.props.changeCurrentCity(city);

    console.log(city);
  }

  render() {
    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Constants.CITIES.map((city, index) => <TabsLink
              key={index}
              city={city}
              changeCity={this.changeCity}
            />)}
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
