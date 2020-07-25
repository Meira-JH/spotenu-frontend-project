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

export const SignUpAdminAction = (signUpAdminInfo) => async (dispatch) => {
  console.log(signUpAdminInfo);
  try {
    const firebaseCreate = await firebase
      .auth()
      .createUserWithEmailAndPassword(
        signUpAdminInfo.email,
        signUpAdminInfo.password
      );

    await firebase
      .firestore()
      .collection("users")
      .doc(firebaseCreate.user.uid)
      .set(signUpAdminInfo);

    dispatch(setCurrentUser(signUpAdminInfo));
    dispatch(push(routes.admin));
  } catch (error) {
    console.error(error);
  }
};
