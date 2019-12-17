import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  USER_DATA,
  USER_TOKEN_SET,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  token: JSON.parse(localStorage.getItem('token')),
  initURL: '',
  authUser: JSON.parse(localStorage.getItem('user')),
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case USER_DATA: {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case USER_TOKEN_SET: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      }
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        token: null,
        authUser: null,
        initURL: ''
      }
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      }
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: '',
        showMessage: false,
        loader: false
      }
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      }
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      }
    }
    default:
      return state;
  }
}
