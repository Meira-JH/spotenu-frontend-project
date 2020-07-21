import { push, replace } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";

export const SignUpBandAction = (signUpBandInfo) => async (dispatch) => {
  console.log(signUpBandInfo)  
  try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(signUpBandInfo.email, signUpBandInfo.password)
        .then((credential) => {
          firebase
            .firestore()
            .collection('bands')
            .doc(credential.user.uid)
            .set({
              approved: signUpBandInfo.approved,
              email: signUpBandInfo.email,
              name: signUpBandInfo.name,
              nickname: signUpBandInfo.nickname,
              description: signUpBandInfo.description,
              password: signUpBandInfo.password,
              role: signUpBandInfo.role
            })
          })
        .catch(function (error) {
          console.error(error.code, error.message);
        });
      dispatch(push(routes.band));
    } catch (error) {
      console.error(error);
    }
  };