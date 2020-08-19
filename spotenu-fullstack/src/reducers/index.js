import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import users from './users'
import bands from './bands'
import admins from './admins'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    bands,
    admins
    // Outros reducers aqui
  });
