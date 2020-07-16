import React, { Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../pages/LandingPage";

export const routes = {
    root: "/",
  //   adminPage: "/adminpage",
  //   applicationPage: "/application",
  //   tripsListPage: "/tripslist",
  //   tripDetailsPage: "/tripdetails",
};

export default function Router(props) {
  return (
    <Fragment>
      <Header />
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.root} component={LandingPage} />
        </Switch>
      </ConnectedRouter>
      <Footer />
    </Fragment>
  );
}