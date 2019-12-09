import React from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import Sign from "../sign/sign";
import {PageAddress} from "../../constants";
import Loader from "../loader/loader";
import Property from "../property/property";
import {getLoadingStatus} from "../../reducer/data/selector";

const App = (props) => {
  const {isLoading} = props;

  return (
    <>
      {
        isLoading ? <Loader/>
          :
          <Switch>
            <Route path={PageAddress.MAIN} exact component={MainPage}/>
            <Route path={PageAddress.LOGIN} exact component={Sign}/>
            <Route path={`${PageAddress.OFFER}/:id`} exact render={({match}) => <Property id={Number(match.params.id)}/> }/>
            <Redirect from='*' to={PageAddress.MAIN}/>
          </Switch>
      }
    </>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
  isLoading: getLoadingStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
