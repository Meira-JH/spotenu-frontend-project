import { push, replace } from "connected-react-router";
import { routes } from "../containers/Router"

export const SignUpAction = (signUpInfo) => async (dispatch) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password);
      
    dispatch(push(routes.root))

  } catch (error) {
    console.error(error);
  }
};

export const SetUser
