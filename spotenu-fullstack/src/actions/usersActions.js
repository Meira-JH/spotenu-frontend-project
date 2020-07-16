import { push, replace } from "connected-react-router";
import { routes } from "../router"
import firebase from 'firebase'


export const SignUpAction = (signUpInfo) => async (dispatch) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password)
      .catch(function(error){
        console.error(error);
      });
      
    dispatch(push(routes.root))

  } catch (error) {
    console.error(error);
  }
};

