import { push } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";
import * as admin from "firebase-admin";

function setCurrentUser(currentUser) {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      currentUser,
    },
  };
}

export function setError(error) {
  return {
    type: "SET_ERROR",
    payload: {
      error,
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

function setAdminsToApprove(adminsToApprove) {
  return {
    type: "SET_ADMINS_TO_APPROVE",
    payload: {
      adminsToApprove,
    },
  };
}

function setBandsToApprove(bandsToApprove) {
  return {
    type: "SET_BANDS_TO_APPROVE",
    payload: {
      bandsToApprove,
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
    dispatch(setError(error.message))
  }
};

export const getAdminsToApproveAction = () => async (dispatch) => {
  console.log("get admins to approve funciona");
  try {
    const firebaseSearch = firebase
      .firestore()
      .collection("users")
      .orderBy("name")
      .where("role", "==", "admin");

    let admins = [];
    await firebaseSearch.get().then((snapshot) => {
      return snapshot.docs.forEach((admin) => {
        if (!admin.data().approved) {
          admins.push({ id: admin.id, data: admin.data() });
        }
      });
    });

    dispatch(setAdminsToApprove(admins));
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const approveAdminAction = (adminId) => async (dispatch) => {
  console.log("aprovando admin");
  try {
    await firebase.firestore().collection("users").doc(adminId).update({
      approved: true,
    });

    dispatch(getAdminsToApproveAction());
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const deleteAdminAction = (adminId) => async (dispatch) => {
  try {
    await firebase.firestore().collection("users").doc(adminId).delete();
    await admin
      .auth()
      .deleteUser(adminId)
      .then(function () {
        dispatch(getAdminsToApproveAction())
      })
      .catch(function (error) {
        dispatch(setError(error.message))
      });
    dispatch(getAdminsToApproveAction());
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const getBandsToApproveAction = () => async (dispatch) => {
  try {
    const firebaseSearch = firebase
      .firestore()
      .collection("users")
      .orderBy("name")
      .where("role", "==", "banda");

    let bands = [];
    await firebaseSearch.get().then((snapshot) => {
      return snapshot.docs.forEach((band) => {
        if (!band.data().approved) {
          bands.push({ id: band.id, data: band.data() });
        }
      });
    });

    dispatch(setBandsToApprove(bands));
  } catch (error) {
    dispatch(setError(error.message))
  }
};


export const createGenreAction = (genre) => async (dispatch) => {
  try {
    await firebase.firestore().collection("genres").add(genre);
  } catch (error) {
    dispatch(setError(error.message))
  }
};