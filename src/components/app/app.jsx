import React from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import Sign from "../sign/sign";
import {PAGE_ADDRESS} from "../../constants";
import Loader from "../loader/loader";
import Property from "../property/property";

const App = (props) => {
  const {isLoading} = props;

  return (
    <>
      {
        isLoading ? <Loader/>
          :
          <Switch>
            <Route path={PAGE_ADDRESS.MAIN} exact component={MainPage}/>
            <Route path={PAGE_ADDRESS.LOGIN} exact component={Sign}/>
            <Route path={`${PAGE_ADDRESS.OFFER}/:id`} exact render={({match}) => <Property id={Number(match.params.id)}/> }/>
            <Redirect from='*' to={PAGE_ADDRESS.MAIN}/>
          </Switch>
      }
    </>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
  isLoading: state.DATA.isLoading
});

export {App};
export default connect(mapStateToProps)(App);
