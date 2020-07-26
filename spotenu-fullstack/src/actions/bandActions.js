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

export const setBandAlbums = (bandAlbums) => {
  return {
    type: "SET_BAND_ALBUMS",
    payload: {
      bandAlbums,
    },
  };
};

export const setBandMusics = (bandMusics) => {
  return {
    type: "SET_BAND_MUSICS",
    payload: {
      bandMusics,
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

export const createAlbumAction = (album) => async (dispatch) => {
  try {
    await firebase.firestore().collection("albums").add(album);
    await firebase
      .firestore()
      .collection("users")
      .doc(album.artistId)
      .collection("albums")
      .doc(album.name)
      .set(album);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAlbumAction = (albumId, albumName, artistId) => async (
  dispatch
) => {
  console.log("delete action", albumId, albumName, artistId);
  try {
    await firebase.firestore().collection("albums").doc(albumId).delete();
    await firebase
      .firestore()
      .collection("users")
      .doc(artistId)
      .collection("albums")
      .doc(albumName)
      .delete();

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

export const createMusicAction = (music) => async (dispatch) => {
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(music.artistId)
      .collection("albums")
      .doc(music.album)
      .collection("musics")
      .add(music);
    await firebase.firestore().collection("musics").add(music);
  } catch (error) {
    console.error(error);
  }
};

export const getBandAlbumsAction = (artistId) => async (dispatch) => {
  try {
    let bandAlbums = [];

    await firebase
      .firestore()
      .collection("users")
      .doc(artistId)
      .collection("albums")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) =>
          bandAlbums.push({ id: doc.id, data: doc.data() })
        );
      });

    dispatch(setBandAlbums(bandAlbums));
  } catch (error) {
    console.error(error);
  }
};

export const getBandMusicsAction = (artistId) => async (dispatch) => {
  try {
    let bandMusics = [];

    await firebase
      .firestore()
      .collection("musics")
      .where("artistId", "==", artistId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) =>
          bandMusics.push({ id: doc.id, data: doc.data() })
        );
      });

    dispatch(setBandMusics(bandMusics));
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
        snapshot.forEach((doc) =>
          musics.push({ id: doc.id, data: doc.data() })
        );
      });
    console.log(musics);
    dispatch(setMusics(musics));
  } catch (error) {
    console.error(error);
  }
};
