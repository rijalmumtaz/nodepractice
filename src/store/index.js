import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
// redux-thunk, which allows simple asynchronous use of dispatch
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// init state
const initialState = {};

// const for put middleware which have imported
const middleware = [thunk];

const store = configureStore(
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

export default store;
