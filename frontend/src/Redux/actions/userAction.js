import axios from "axios";
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

//SIGN UP USER
export const signupUser = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/registeruser/", user );
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data.newUser });
    response.data.newUser.role==='parent'? navigate("/acceuilparent"): navigate("/activitielist");
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNUP_USER_FAIL, payload: error });
  }
}; 

//SIGN IN USER parent 
export const signinUserParent = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/users/login/", user);
    dispatch({ type: SIGNIN_USER_PARNT_SUCCESS, payload: response.data });
    response.data.user.role ==="parent" ? navigate("/acceuilParent") : alert("undefined");
    
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNIN_USER_PARENT_FAIL, payload: error });
  }
};

// SIGN IN USER educator
export const signinUserEducator = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/users/login/", user);
    dispatch({ type: SIGNIN_USER_EDUCATOR_SUCCESS, payload: response.data });
    response.data.user.role ==="educator" ? navigate("/activitielist") : alert("undefined");
    
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNIN_USER_EDUCATOR_FAIL, payload: error });
  }
};


//GET CURRENT USER
export const getCurrentuser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      "http://localhost:5000/users/currentUser",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
  }
}; 

//LOG OUT USER
export const logoutUser = (navigate) => {
  navigate("/");
  return { type: LOGOUT };
};


// register children
export const registerChildren = (user, navigate) => async (dispatch)=>{
  try {
    const response = await axios.post("http://localhost:5000/users/registerChildren",user,{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    console.log("hi children")
    dispatch({ type: REGISTER_CHILDREN_SUCCESS, payload: response.data.newUser });
   navigate("/acceuilparent");
} catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_CHILDREN_FAIL, payload: error });
  }
};