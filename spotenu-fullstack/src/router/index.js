import React, { Fragment, useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SignUpBandPage from "../pages/SignUpBandPage";
import SignUpAdminPage from "../pages/SignUpAdminPage";
import PageError from "../pages/PageError";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import BandPage from "../pages/BandPage";
import { connect } from "react-redux";
import { getUserFromFirebase } from "../actions/usersActions";
import firebase from "firebase";

export const routes = {
  root: "/",
  signUp: "/signUp",
  login: "/login",
  signUpBand: "/signUpBand",
  registerAdmin: "/registerAdmin",
  user: "/user",
  admin: "/admin",
  band: "/band",
  error: "/error",
};

function Router(props) {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return props.toSetUser(user.uid);
      } else {
        return props.toSetUser(null);
      }
    });
  }, [] );

  return (
    <Fragment>
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.band} component={BandPage} />
          <Route exact path={routes.admin} component={AdminPage} />
          <Route exact path={routes.user} component={UserPage} />
          <Route exact path={routes.registerAdmin} component={SignUpAdminPage} />
          <Route exact path={routes.signUpBand} component={SignUpBandPage} />
          <Route exact path={routes.signUp} component={SignUpPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.root} component={LandingPage} />
          <Route path={routes.error} component={PageError} />
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toSetUser: (LoginInfo) => dispatch(getUserFromFirebase(LoginInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
