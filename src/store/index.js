import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  legacy_createStore,
} from "@reduxjs/toolkit";
// redux-thunk, which allows simple asynchronous use of dispatch
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// init state
const initialState = {};

// const for put middleware which have imported
const middleware = [thunk];

export default function configureStore(initialState) {
  const store = legacy_createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      // checking redux devtools extension is exist in browser or not
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  return store;
}
