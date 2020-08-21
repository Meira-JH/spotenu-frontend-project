import { push } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";
import { IdGenerator } from "../services/IdGenetor";

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

export const setAlbumsMusic = (albumsMusic) => {
  return {
    type: "SET_BAND_MUSICS",
    payload: {
      albumsMusic,
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
    dispatch(setError(error.message))
  }
};

export const createAlbumAction = (album) => async (dispatch) => {
  const newId = new IdGenerator().generate();
  try {
    await firebase.firestore().collection("albums").doc(newId).set(album);
    await firebase
      .firestore()
      .collection("users")
      .doc(album.artistId)
      .collection("albums")
      .doc(newId)
      .set(album);
    } catch (error) {
      dispatch(setError(error.message))
    }
};

export const deleteAlbumAction = (albumId, albumName, artistId) => async (
  dispatch
) => {
  try {
      const musics = firebase
      .firestore()
      .collection("musics")
      .where("album", "==", albumId)
  
      if(musics){
        await musics.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          });
        });
      }

      await firebase.firestore().collection("albums").doc(albumId).delete();
      await firebase
        .firestore()
        .collection("users")
        .doc(artistId)
        .collection("albums")
        .doc(albumId)
        .delete();

    dispatch(getBandAlbumsAction(artistId))
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const createMusicAction = (music) => async (dispatch) => {
  const newId = new IdGenerator().generate();

  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(music.artistId)
      .collection("albums")
      .doc(music.album)
      .collection("musics")
      .doc(newId)
      .set(music);
    await firebase.firestore().collection("musics").doc(newId).set(music);
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const deleteMusicAction = (musicId, albumName, artistId) => async (
  dispatch
) => {
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(artistId)
      .collection("albums")
      .doc(albumName)
      .collection("musics")
      .doc(musicId)
      .delete();
      
    await firebase.firestore().collection("musics").doc(musicId).delete();

    dispatch(getBandMusicsAction(artistId))
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const getBandAlbumsAction = (artistId) => async (dispatch) => {
  try {
    const bandAlbums = await firebase
      .firestore()
      .collection("users")
      .doc(artistId)
      .collection("albums")
      .orderBy("artist")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map(album => ({
          id: album.id,
          data: album.data()
        }))
      });

    dispatch(setBandAlbums(bandAlbums));
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export const getBandMusicsAction = (artistId) => async (dispatch) => {
  try {

    const bandMusics = await firebase
      .firestore()
      .collection("musics")
      .where("artistId", "==", artistId)
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) =>
          ({ id: doc.id, data: doc.data() })
        );
      });

    dispatch(setBandMusics(bandMusics));
  } catch (error) {
    dispatch(setError(error.message))
  }
};

