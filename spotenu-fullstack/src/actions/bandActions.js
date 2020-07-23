import { push } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";

function setCurrentUser(currentUser) {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      currentUser,
    },
  };
}

export const SignUpBandAction = (signUpBandInfo) => async (dispatch) => {
  try {
      const firebaseCreate = await firebase
        .auth()
        .createUserWithEmailAndPassword(signUpBandInfo.email, signUpBandInfo.password)
        
      await firebase
        .firestore()
        .collection('users')
        .doc(firebaseCreate.user.uid)
        .set(signUpBandInfo)

      dispatch(setCurrentUser(signUpBandInfo));
      dispatch(push(routes.band));
    
    } catch (error) {
      console.error(error);
    }
  };