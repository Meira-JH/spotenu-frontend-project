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

export function setCurrentUserId(currentUserId) {
  return {
    type: "SET_CURRENT_USER_ID",
    payload: {
      currentUserId,
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

export const setMusics = (musics) => {
  return {
    type: "SET_MUSICS",
    payload: {
      musics,
    },
  };
};

export const logoutUser = () => async(dispatch) => {
  try{
    await firebase.auth().signOut()
  } catch(error){
    console.error(error)
  }
  dispatch(setCurrentUser(undefined))
  dispatch(push(routes.root));
}


export const getUserFromFirebase = (userId) => async (dispatch) => {
  try{
    const currentUser = (
      await firebase.firestore().collection("users").doc(userId).get()
    ).data();
    dispatch(setCurrentUserId(userId))
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

export const getMusicsAction = () => async (dispatch) => {
  try {
    let musics = [];

    await firebase
      .firestore()
      .collection("musics")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => musics.push(doc.data()));
      });

    dispatch(setMusics(musics));
  } catch (error) {
    console.error(error);
  }
};
