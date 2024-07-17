import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Cambiado 'thunkMiddleware' a 'thunk'
import rootReducer from "./reducer";

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
