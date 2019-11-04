import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";


export class TabsLink extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.changeCity(this.props.city);
  }

  render() {
    const {city, currentCity} = this.props;
    return (
      <li className="locations__item">
        <a
          onClick={this.handleClick}
          className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
          href="#">
          <span>{city}</span>
        </a>
      </li>
    );
  }
}

TabsLink.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city
});

export default connect(mapStateToProps)(TabsLink);
