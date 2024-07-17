import { GET_ALL_PRODUCTS, SET_FILTERS } from "./actionTypes";

const initialState = {
  products: [],
  filters: {
    Cursos: false,
    Recetarios: false,
    Promociones: false,
  },
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      console.log("Products fetched: ", action.payload);
      return {
        ...state,
        products: action.payload,
      };
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
