import {
  GETSONG_DATA,
  GETSONG_DATA_SUCCESS,
  GETSONG_DATA_FAILED,
  GETARTIST_DATA,
  GETARTIST_DATA_SUCCESS,
  GETARTIST_DATA_FAILED,
  ARTIST_FILTER,
  ARTIST_FILTER_SUCCESS,
  ARTIST_FILTER_FAILED,
  SET_LIKE,
  SET_UNLIKE,
} from './types';
import firestore from '@react-native-firebase/firestore';

let dataSong = [];
export const GetSongData = () => {
  dataSong.length = 0;
  return (dispatch) => {
    dispatch({type: GETSONG_DATA});
    firestore()
      .collection('song')
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          return dataSong.push(doc.data());
        }),
      )
      .then(() => {
        dispatch({type: GETSONG_DATA_SUCCESS, payload: dataSong});
      })
      .catch((err) => {
        dispatch({type: GETSONG_DATA_FAILED});
        console.log(err);
      });
  };
};

let dataArtist = [];
export const GetArtistData = () => {
  dataArtist.length = 0;
  return (dispatch) => {
    dispatch({type: GETARTIST_DATA});
    firestore()
      .collection('artist')
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          dataArtist.push(doc.data());
        }),
      )
      .then(() => {
        dispatch({type: GETARTIST_DATA_SUCCESS, payload: dataArtist});
      })
      .catch((err) => {
        dispatch({type: GETARTIST_DATA_FAILED});
        console.log(err);
      });
  };
};

let FilterList = [];
export const ArtistFilter = (artist) => {
  FilterList.length = 0;
  return (dispatch) => {
    dispatch({type: ARTIST_FILTER});
    firestore()
      .collection('song')
      .where('artistNameEnglish', '==', artist)
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          FilterList.push(doc.data());
        }),
      )
      .then(() => {
        console.log('actions', FilterList);
        dispatch({type: ARTIST_FILTER_SUCCESS, payload: FilterList});
      })
      .catch((err) => {
        dispatch({type: ARTIST_FILTER_FAILED});
        console.log(err);
      });
  };
};

export const Like = (currentUser, songId) => {
  return (dispatch) => {
    firestore()
      .collection('likes')
      .doc(`${currentUser}${songId}`)
      .set({
        User: currentUser,
        songId,
      })
      .then((res) => {
        dispatch({type: SET_LIKE});
        console.log('like success', res);
      })
      .catch((err) => console.log('like failed', err));
  };
};

export const Unlike = (currentUser, songId) => {
  return (dispatch) => {
    firestore()
      .collection('likes')
      .doc(`${currentUser}${songId}`)
      .delete()
      .then((res) => {
        dispatch({type: SET_UNLIKE});
        console.log('Unlike success', res);
      })
      .catch((err) => console.log('Unlike failed', err));
  };
};

export const isSongLiked = (currentUser, songId) => {
  return (dispatch) => {
    firestore()
      .collection('likes')
      .doc(`${currentUser}${songId}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({type: SET_LIKE});
          console.log('doc exists');
        }
        if (!doc.exists) {
          dispatch({type: SET_UNLIKE});
          console.log('doc doesnt exist');
        }
      })
      .catch((err) => console.log(err));
  };
};
