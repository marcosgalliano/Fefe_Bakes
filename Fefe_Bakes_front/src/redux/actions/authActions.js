import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes';

export const login = (email, password) => async (dispatch) => {
    try {                                 //Cambiar por url real
        const response = await axios.post('https://api.devfrikipolis.com/login', { email, password });
        const { token, user } = response.data;

        localStorage.setItem('token', token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message,
        });
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    return { type: LOGOUT };
};
