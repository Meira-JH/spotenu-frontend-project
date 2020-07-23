import { push } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";

const db = firebase.firestore;

function setCurrentUser(currentUser) {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      currentUser,
    },
  };
}

export const setContentAction = (content) => {
  return {
    type: "SET_CONTENT",
    payload: {
      content,
    },
  };
};

export const SignUpBandAction = (signUpBandInfo) => async (dispatch) => {
  try {
    const firebaseCreate = await firebase
      .auth()
      .createUserWithEmailAndPassword(
        signUpBandInfo.email,
        signUpBandInfo.password
      );

    await firebase
      .firestore()
      .collection("users")
      .doc(firebaseCreate.user.uid)
      .set(signUpBandInfo);

    dispatch(setCurrentUser(signUpBandInfo));
    dispatch(push(routes.band));
  } catch (error) {
    console.error(error);
  }
};

export const createAlbum = (album) => async (dipatch) => {
  await db.collection("albums").add({
    album,
  });
};
