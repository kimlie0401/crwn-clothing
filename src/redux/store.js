import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import persistReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(
  persistReducer,
  compose(
    applyMiddleware(...middlewares),
    window.navigator.userAgent.includes("Chrome")
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

export const persistor = persistStore(store);

export default { store, persistor };
