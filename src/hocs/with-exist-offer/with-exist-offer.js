import React, {PureComponent} from "react";
import PropType from "prop-types";
import {connect} from "react-redux";
import compose from 'recompose/compose';
import {Redirect} from "react-router-dom";
import {getOfferById} from "../../reducer/data/selector";
import {PageAddress} from "../../constants";

const withExistOffer = (Component) => {
  class WithExistOffer extends PureComponent {
    render() {
      return this.props.isOfferExist ? <Component {...this.props}/> : <Redirect to={PageAddress.MAIN}/>;
    }
  }

  WithExistOffer.propTypes = {
    isOfferExist: PropType.bool.isRequired,
  };


  return WithExistOffer;
};

const mapStateToProps = (state, ownProps) => {
  return {
    isOfferExist: !!getOfferById(state, ownProps.id),
  };
};

const composedWrapper = compose(
    connect(mapStateToProps),
    withExistOffer
);

export default composedWrapper;
