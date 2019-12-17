import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_USER_SUCCESS,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  USER_TOKEN_SET,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS
} from "constants/ActionTypes";
import axios from 'util/Api';


export const userSignUp = (user) => {
  return {
    type: SIGNUP_USER,
    payload: user
  };
};

export const userSignOut = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    setTimeout(() => {
      localStorage.removeItem("token");
      dispatch({type: FETCH_SUCCESS});
      dispatch({type: SIGNOUT_USER_SUCCESS});
      dispatch({type: ON_HIDE_LOADER});
    }, 2000);
  }
};


export const userSignIn = (admin) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('admins/login', {
        email: admin.email,
        password: admin.password,
      }
    ).then(data => {
      if (data.data) {
        localStorage.setItem("token", JSON.stringify(data.data));
        axios.defaults.headers.common['access-token'] = "Bearer " + data.data;
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_TOKEN_SET, payload: data.data});
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const userSignUpSuccess = (authUser) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser
  };
};

export const userSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser
  }
};
export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  }
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};
