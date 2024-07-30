import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
} from '../actionTypes';

export const login = (email, password) => dispatch => {
    return axios.post('http://localhost:3000/api/auth/login', { email, password })
        .then(response => {
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { token, user }
            });
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.response.data.message
            });
        });
};

export const register = (name, email, password) => dispatch => {
    return axios.post('http://localhost:3000/api/auth/register', { name, email, password })
        .then(response => {
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: { token, user }
            });
        })
        .catch(error => {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error.response.data.message
            });
        });
};

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
};
