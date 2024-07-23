import {
  GET_ALL_PRODUCTS,
  SET_FILTERS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
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
  user: null,
  authError: null,
  courses: [],
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
        filters: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
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
        courses: state.courses.map(course =>
          course.id === action.payload.id ? action.payload : course
        ),
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
