import React, { Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SignUpBandPage from "../pages/SignUpBandPage";
import SignUpAdminPage from "../pages/SignUpAdminPage";

export const routes = {
  root: "/",
  signUp: "/signUp",
  login: "/login",
  signUpBand: "/signUpBand",
  registerAdmin: "/registerAdmin"
};

export default function Router(props) {
  return (
    <Fragment>
      <ConnectedRouter history={props.history}>
        <Header />
        <Switch>
          <Route exact path={routes.registerAdmin} component={SignUpAdminPage} />
          <Route exact path={routes.signUpBand} component={SignUpBandPage} />
          <Route exact path={routes.signUp} component={SignUpPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.root} component={LandingPage} />
        </Switch>
        <Footer />
      </ConnectedRouter>
    </Fragment>
  );
}
