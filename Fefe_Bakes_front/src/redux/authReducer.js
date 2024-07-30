import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './actionTypes';

const initialState = {
    user: null,
    authError: null,
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                authError: null,
            };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {
                ...state,
                authError: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
            };
        default:
            return state;
    }
};

export default authReducer;
