import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from "../actionTypes";

export const login = (email, password) => (dispatch) => {
  return axios
    .post("http://localhost:3001/api/users/login", { email, password })
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user },
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const register = (name, surname, email, password) => (dispatch) => {
  return axios
    .post("http://localhost:3001/api/users/create", {
      name,
      surname,
      email,
      password,
    })
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      console.log(response);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token, user },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
