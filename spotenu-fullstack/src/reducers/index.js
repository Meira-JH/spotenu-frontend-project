import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import users from './users'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    // Outros reducers aqui
  });
