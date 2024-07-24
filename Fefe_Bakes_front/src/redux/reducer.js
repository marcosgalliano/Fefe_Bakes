import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {
    GET_ALL_PRODUCTS,
    SET_FILTERS,
    GET_ALL_COURSES,
    CREATE_COURSE,
    UPDATE_COURSE,
    DELETE_COURSE,
} from './actionTypes';

const initialState = {
    products: [],
    filters: {
        Cursos: false,
        Recetarios: false,
        Promociones: false,
    },
    courses: [],
};

const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};

const filterReducer = (state = initialState.filters, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return action.payload;
        default:
            return state;
    }
};

const courseReducer = (state = initialState.courses, action) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            return action.payload;
        case CREATE_COURSE:
            return [...state, action.payload];
        case UPDATE_COURSE:
            return state.map(course =>
                course.id === action.payload.id ? action.payload : course
            );
        case DELETE_COURSE:
            return state.filter(course => course.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    filters: filterReducer,
    courses: courseReducer,
});

export default rootReducer;
