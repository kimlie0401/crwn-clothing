import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.navigator.userAgent.includes("Chrome")
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

export default store;
