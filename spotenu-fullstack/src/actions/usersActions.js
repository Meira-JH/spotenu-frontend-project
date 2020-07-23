import { push } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";

export function setCurrentUser(currentUser) {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      currentUser,
    },
  };
}

export const getUserFromFirebase = (userId) => async (dispatch) => {
  try{
    const currentUser = (
      await firebase.firestore().collection("users").doc(userId).get()
    ).data();    
    dispatch(setCurrentUser(currentUser));
  } catch(error){
    console.error(error);
  }
}

export const SignUpAction = (signUpInfo) => async (dispatch) => {
  try {
    const firebaseCreate = await firebase
      .auth()
      .createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password);

    await firebase
      .firestore()
      .collection("users")
      .doc(firebaseCreate.user.uid)
      .set({
        accountType: signUpInfo.accountType,
        email: signUpInfo.email,
        name: signUpInfo.name,
        nickname: signUpInfo.nickname,
        password: signUpInfo.password,
        role: signUpInfo.role,
      });

    dispatch(setCurrentUser(signUpInfo));
    dispatch(push(routes.user));
  } catch (error) {
    console.error(error);
  }
};

export const LoginAction = (loginInfo) => async (dispatch) => {
  try {
    const login = await firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .catch(function (error) {
        console.error(error.code, error.message);
      });

    const user = (
      await firebase.firestore().collection("users").doc(login.user.uid).get()
    ).data();

    dispatch(setCurrentUser(user));
    if(user.role === "ouvinte"){
      dispatch(push(routes.user));
    } else if (user.role === "banda") {
      dispatch(push(routes.band));
    } else if (user.role === "admin"){
      dispatch(push(routes.admin));
    }
  } catch (error) {
    console.error(error);
  }
};
