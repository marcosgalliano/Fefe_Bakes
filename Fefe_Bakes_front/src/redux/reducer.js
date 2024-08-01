// reducers/rootReducer.js
import {
  GET_ALL_PRODUCTS,
  SET_FILTERS,
  GET_ALL_COURSES,
  CREATE_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actionTypes";

const initialState = {
  products: [],
  filters: {
    Cursos: false,
    Recetarios: false,
    Promociones: false,
  },
  courses: [],
  token: null,
  user: null,
  authError: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case GET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    case CREATE_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    case UPDATE_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === action.payload.id ? action.payload : course
        ),
      };

    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authError: null,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authError: null,
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

export default rootReducer;
