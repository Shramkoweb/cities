import * as React from "react";
import {connect} from "react-redux";
import compose from 'recompose/compose';
import {Redirect} from "react-router-dom";
import {getOfferById} from "../../reducer/data/selector";
import {PageAddress} from "../../constants";


interface InjectedProps {
  isOfferExist: boolean,
}

const withExistOffer = (Component) => {
  class WithExistOffer extends React.PureComponent<InjectedProps> {
    render() {
      return this.props.isOfferExist ? <Component {...this.props}/> : <Redirect to={PageAddress.MAIN}/>;
    }
  }

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
