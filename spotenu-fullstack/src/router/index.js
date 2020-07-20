import React, { Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SignUpBandPage from "../pages/SignUpBandPage";
import SignUpAdminPage from "../pages/SignUpAdminPage";
import PageError from "../pages/PageError";
import UserPage from "../pages/UserPage";

export const routes = {
  root: "/",
  signUp: "/signUp",
  login: "/login",
  signUpBand: "/signUpBand",
  registerAdmin: "/registerAdmin",
  user: "/user"
};

export default function Router(props) {
  return (
    <Fragment>
      <ConnectedRouter history={props.history}>
        <Switch>
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
