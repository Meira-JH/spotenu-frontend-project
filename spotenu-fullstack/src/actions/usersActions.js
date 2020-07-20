import { push, replace } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";

export const SignUpAction = (signUpInfo) => async (dispatch) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password)
      .then((credential) => {
        console.log(credential)
        firebase
          .firestore()
          .collection('users')
          .doc(credential.user.uid)
          .set({
            accountType: signUpInfo.accountType,
            email: signUpInfo.email,
            name: signUpInfo.name,
            nickname: signUpInfo.nickname,
            password: signUpInfo.password,
            role: signUpInfo.role
          })
        })
      .catch(function (error) {
        console.error(error.code, error.message);
      });
    dispatch(push(routes.root));
  } catch (error) {
    console.error(error);
  }
};

export const LoginAction = (loginInfo) => async (dispatch) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then((user) => {
        console.log(user);
      })
      .catch(function (error) {
        console.error(error.code, error.message);
      });

    dispatch(push(routes.user));
  } catch (error) {
    console.error(error);
  }
};
