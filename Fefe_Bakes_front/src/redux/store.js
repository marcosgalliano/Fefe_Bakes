import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import reducer from './reducer';
import setAuthToken from './setAuthToken';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Set up a store subscription listener to store the user's token in localStorage
let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (previousState.token !== currentState.token) {
    const token = currentState.token;
    setAuthToken(token);
  }
});

export default store;
