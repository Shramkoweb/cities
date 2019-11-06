import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";
import TabsLink from "../tabs-link/tabs-link";
import PropTypes from "prop-types";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.changeCity = this.changeCity.bind(this);
  }

  changeCity(city) {
    this.props.changeCurrentCity(city);
  }

  render() {
    const {cities} = this.props;

    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city, index) => <TabsLink
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

Tabs.propTypes = {
  cities: PropTypes.array.isRequired,
  changeCurrentCity: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  cities: [...new Set(state.offers.map((element) => element.city))]
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
