import * as React from "react";
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
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

interface AppProps {
  onCheckAuth: () => void,
  isLoading: boolean,
  isAuthorizationRequired: boolean,
  isError: string,
}

class App extends React.PureComponent<AppProps> {
  componentDidMount() {
    const {onCheckAuth} = this.props;

    onCheckAuth();
  }

  render() {
    const {isLoading, isAuthorizationRequired, isError} = this.props;
    const FavoritesPrivate = withPrivateRoute(isAuthorizationRequired, PageAddress.LOGIN)(FavoritesPage);
    const SignPrivate = withPrivateRoute(!isAuthorizationRequired)(Sign);

    return (
      <>
        {
          isLoading ? <Loader isError={isError}/>
            :
            <Switch>
              <Route path={PageAddress.MAIN} exact component={MainPage}/>
              <Route path={PageAddress.LOGIN} exact component={SignPrivate}/>
              <Route path={`${PageAddress.OFFER}/:id`} exact render={({match}) =>
                <PropertyWrapped id={Number(match.params.id)}/>}/>
              <Route path={PageAddress.FAVORITE} exact component={FavoritesPrivate}/>
              <Redirect from='*' to={PageAddress.MAIN}/>
            </Switch>
        }
      </>
    );
  }
}

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
