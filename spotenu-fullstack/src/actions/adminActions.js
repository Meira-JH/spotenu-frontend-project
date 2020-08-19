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

export const getAdminsToApproveAction = () => async (dispatch) => {
  console.log("get admins to approve funciona");
  try {
    const firebaseSearch = firebase
      .firestore()
      .collection("users")
      .where("role", "==", "admin");

    const admins = await firebaseSearch.get().then((snapshot) => {
      snapshot.docs.map((admin) =>
        admin.approved ? false : { id: admin.id, data: admin.data() }
      );
    });

    dispatch(setAdminsToApprove(admins));
  } catch (error) {
    console.error(error);
  }
};

export const approveAdminAction = (adminId) => async (dispatch) => {
  console.log("aprovando admin");
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(adminId)
      .update({
        approved: true,
      })
      .then(() => {
        console.log("usuário aprovado");
      });
  } catch (error) {
    console.error(error);
  }
};

export const deleteAdminAction = (adminId) => async (dispatch) => {
  console.log("deletando admin");
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(adminId)
      .delete()
      .then(() => {
        console.log("usuário deletado");
      });
  } catch (error) {
    console.error(error);
  }
};
