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
} from '../actions/types';

const INITIAL_STATE = {
  loadingArtistFilter: false,
  loadingSong: false,
  loadingArtist: false,
  dataSong: null,
  dataArtist: null,
  artistFilter: null,
  songLiked: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETSONG_DATA: {
      return {
        ...state,
        loadingSong: true,
      };
    }
    case GETSONG_DATA_SUCCESS: {
      return {
        ...state,
        loadingSong: false,
        dataSong: action.payload,
      };
    }
    case GETSONG_DATA_FAILED: {
      return {
        ...state,
        loadingSong: false,
      };
    }
    case GETARTIST_DATA: {
      return {
        ...state,
        loadingArtist: true,
      };
    }
    case GETARTIST_DATA_SUCCESS: {
      return {
        ...state,
        loadingArtist: false,
        dataArtist: action.payload,
      };
    }
    case GETARTIST_DATA_FAILED: {
      return {
        ...state,
        loadingArtist: false,
      };
    }
    case ARTIST_FILTER: {
      return {
        ...state,
        loadingArtistFilter: true,
      };
    }
    case ARTIST_FILTER_SUCCESS: {
      return {
        ...state,
        loadingArtist: false,
        artistFilter: action.payload,
      };
    }
    case ARTIST_FILTER_FAILED: {
      return {
        ...state,
        loadingArtistFilter: false,
      };
    }
    case SET_LIKE: {
      return {
        ...state,
        songLiked: true,
      };
    }
    case SET_UNLIKE: {
      return {
        ...state,
        songLiked: false,
      };
    }
    default:
      return state;
  }
};
