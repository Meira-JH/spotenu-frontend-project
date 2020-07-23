import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import users from './users'
import bands from './bands'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    bands
    // Outros reducers aqui
  });
