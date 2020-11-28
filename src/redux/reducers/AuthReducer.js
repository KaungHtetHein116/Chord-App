import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_OUT_USER,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: '',
  loading: false,
  authenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {...state, loading: true, error: ''};
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        error: '',
        loading: false,
        authenticated: true,
        user: action.payload,
      };
    }
    case LOGIN_USER_FAIL: {
      console.log('login failed');
      return {
        ...state,
        error: 'Authentication Failed',
        loading: false,
        authenticated: false,
      };
    }
    case SIGN_OUT_USER: {
      console.log('logged out success');
      return {
        state,
      };
    }
    default:
      return state;
  }
};
