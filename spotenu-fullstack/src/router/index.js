import React, { Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

export const routes = {
  //   root: "/",
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
          {/* <Route exact path={routes.root} component={LoginPage} /> */}
        </Switch>
      </ConnectedRouter>
      <Footer />
    </Fragment>
  );
}