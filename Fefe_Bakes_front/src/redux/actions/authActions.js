import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  SET_ID,
} from "../actionTypes";

export const login = (email, password) => (dispatch) => {
  return axios
    .post("http://localhost:3001/api/users/login", { email, password })
    .then((response) => {
      const { token, user } = response.data;

      const { password, ...userWithoutPassword } = user;

      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      console.log(userWithoutPassword);

      localStorage.setItem("token", token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user: userWithoutPassword },
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
      const { token, created } = response.data;

      const { password, ...userWithoutPassword } = created;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));

      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token, user: userWithoutPassword },
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

export const setId = (id) => (dispatch) => {
  dispatch({
    type: SET_ID,
    payload: id,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
