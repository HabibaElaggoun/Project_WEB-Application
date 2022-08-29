import {
    GET_CURRENT_USER_FAIL,
    GET_CURRENT_USER_SUCCESS,
    LOGOUT,
    REGISTER_CHILDREN_FAIL,
    REGISTER_CHILDREN_SUCCESS,
    SIGNIN_USER_EDUCATOR_FAIL,
    SIGNIN_USER_EDUCATOR_SUCCESS,
    SIGNIN_USER_PARENT_FAIL,
    SIGNIN_USER_PARNT_SUCCESS,
    SIGNUP_USER_FAIL,
    SIGNUP_USER_SUCCESS,
  } from "../constants/userTypes";
  
  const initialState = {
    loading: false,
    currentUser: {},
    
  errors: null,
  };
  export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

//Signup user
      case SIGNUP_USER_SUCCESS:
        return { ...state, currentUser: payload };

      case SIGNUP_USER_FAIL:
        return { ...state, errors: payload };
//Parent signin
      case SIGNIN_USER_PARNT_SUCCESS:
        localStorage.setItem("token", payload.token);
        return { ...state, currentUser: payload.user };
 
      case SIGNIN_USER_PARENT_FAIL:
        return { ...state, errors: payload };
//Educator signin
      case SIGNIN_USER_EDUCATOR_SUCCESS:
        localStorage.setItem("token", payload.token);
        return { ...state, currentUser: payload.user };

      case SIGNIN_USER_EDUCATOR_FAIL:
        return { ...state, errors: payload };

//Get Current user
      case GET_CURRENT_USER_SUCCESS:
        return { ...state, currentUser: payload };

      case GET_CURRENT_USER_FAIL:
        return { ...state, errors: payload };

//Logout
      case LOGOUT:
        localStorage.removeItem("token");
        return {
          loading: false,
          currentUser: {},
          errors: null,
        };
      
//Register children
      case REGISTER_CHILDREN_SUCCESS:
        return { ...state, currentUser: payload };

      case REGISTER_CHILDREN_FAIL:
        return { ...state, errors: payload 
        };
        
      default:
        return state;
    }
  };