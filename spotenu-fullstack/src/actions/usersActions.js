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

export function setError(error) {
  return {
    type: "SET_ERROR",
    payload: {
      error,
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

export const setGenres = (genres) => {
  return {
    type: "SET_GENRES",
    payload: {
      genres,
    },
  };
};

export const setAlbumsByGenre = (albumsByGenre) => {
  return {
    type: "SET_ALBUMS_BY_GENRE",
    payload: {
      albumsByGenre,
    },
  };
};

export const setAlbumRender = (albumRender) => {
  return {
    type: "SET_ALBUM_RENDER",
    payload: {
      albumRender,
    },
  };
};

export const setAlbumsMusic = (albumsMusic) => {
  return {
    type: "SET_ALBUMS_MUSIC",
    payload: {
      albumsMusic,
    },
  };
};

export const logoutUser = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
  dispatch(setCurrentUser(undefined));
  dispatch(push(routes.root));
};

export const getUserFromFirebase = (userId) => async (dispatch) => {
  try {
    const currentUser = (
      await firebase.firestore().collection("users").doc(userId).get()
    ).data();
    dispatch(setCurrentUserId(userId));
    dispatch(setCurrentUser(currentUser));
  } catch (error) {
    console.error(error);
  }
};

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
        dispatch(setError(error.message));
      });

    const user = (
      await firebase.firestore().collection("users").doc(login.user.uid).get()
    ).data();

    dispatch(setCurrentUser(user));
    if (user.role === "ouvinte") {
      dispatch(push(routes.user));
    } else if (user.role === "banda") {
      dispatch(push(routes.band));
    } else if (user.role === "admin") {
      dispatch(push(routes.admin));
    }
  } catch (error) {
    console.error(error);
  }
};

export const getMusicsAction = () => async (dispatch) => {
  try {
    console.log("action music");
    let musics = [];

    await firebase
      .firestore()
      .collection("musics")
      .orderBy("artist")
      .orderBy("name")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) =>
          musics.push({ id: doc.id, data: doc.data() })
        );
      });
    console.log("music users action", musics);
    dispatch(setMusics(musics));
  } catch (error) {
    console.error(error);
  }
};

export const getGenresAction = () => async (dispatch) => {
  console.log("action genre");
  try {
    let genres = [];

    await firebase
      .firestore()
      .collection("genres")
      .orderBy("genre")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) =>
          genres.push({ id: doc.id, data: doc.data() })
        );
      });
    dispatch(setGenres(genres));
  } catch (error) {
    console.error(error);
  }
};

export const getAlbumsByGenreAction = (genre, render) => async (dispatch) => {
  try {
    const albumsByGenre = firebase
      .firestore()
      .collection("albums")
      .where("genre", "==", genre);

    let response;
    if (albumsByGenre) {
      response = await albumsByGenre.get().then((snapshot) => {
        return snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
      });
    }
    console.log("render na action", render)
    dispatch(setAlbumsByGenre(response));
    dispatch(setAlbumRender(render));
  } catch (error) {
    console.error(error);
  }
};

export const getAlbumsMusicAction = (albumId, render) => async (dispatch) => {
  try {
    const musicsAlbum = firebase
      .firestore()
      .collection("musics")
      .where("album", "==", albumId)

       const response = await musicsAlbum.get()
        .then((snapshot) => {
          return snapshot.docs.map((doc) =>
            ({ id: doc.id, data: doc.data() })
          );
        });

    dispatch(setAlbumsMusic(response));
    dispatch(setAlbumRender(render));
  } catch (error) {
    console.error(error);
  }
};