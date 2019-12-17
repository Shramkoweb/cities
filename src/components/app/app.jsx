import React from "react";
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import Sign from "../sign/sign";
import {PageAddress} from "../../constants";
import Loader from "../loader/loader";
import Property from "../property/property";
import {getError, getLoadingStatus} from "../../reducer/data/selector";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route";
import FavoritesPage from "../favorites-page/favorites-page";
import {Operation} from "../../reducer/user/user";
import withExistOffer from "../../hocs/with-exist-offer/with-exist-offer";

const PropertyWrapped = withExistOffer(Property);

class App extends React.PureComponent {
  componentDidMount() {
    const {onCheckAuth} = this.props;

    onCheckAuth();
  }

  render() {
    const {isLoading, isAuthorizationRequired, isError} = this.props;
    const FavoritesPrivate = withPrivateRoute(isAuthorizationRequired, PageAddress.MAIN)(FavoritesPage);

    return (
      <>
        {
          isLoading ? <Loader isError={isError}/>
            :
            <Switch>
              <Route path={PageAddress.MAIN} exact component={MainPage}/>
              <Route path={PageAddress.LOGIN} exact component={Sign}/>
              <Route path={`${PageAddress.OFFER}/:id`} exact render={({match}) => <PropertyWrapped id={Number(match.params.id)}/>}/>
              <Route path={PageAddress.FAVORITE} exact component={FavoritesPrivate}/>
              <Redirect from='*' to={PageAddress.MAIN}/>
            </Switch>
        }
      </>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  isError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onCheckAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCheckAuth: () => dispatch(Operation.onCheckAuth()),
});

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
  isLoading: getLoadingStatus(state),
  isError: getError(state)
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
