import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actionTypes';

import setAuthToken from '../setAuthToken';

// Acción para iniciar sesión
export const login = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/login', { email, password });
        const { token, user } = res.data;
        setAuthToken(token);
        dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
    }
};

// Acción para cerrar sesión
export const logout = () => (dispatch) => {
    setAuthToken(null);
    dispatch({ type: LOGOUT });
};

// Acción para registrarse
export const register = (name, email, password) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/register', { name, email, password });
        const { token, user } = res.data;
        setAuthToken(token);
        dispatch({ type: REGISTER_SUCCESS, payload: { token, user } });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.response.data.message });
    }
};
