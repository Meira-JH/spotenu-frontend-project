import "./App.css";
import React from "react";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import MuiThemeProvider from "@material-ui/core/MuiThemeProvider";
import theme from "../src/style";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
];

const store = createStore(generateReducers(history), compose(...middlewares));

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history} />
    </MuiThemeProvider>
  </Provider>
);

export default App;
