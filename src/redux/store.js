import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import persistReducer from "./root-reducer";

import { composeWithDevTools } from "redux-devtools-extension";
import { compose } from "redux";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistReducer,
  compose(applyMiddleware(...middlewares), composeWithDevTools())
);

export const persistor = persistStore(store);

export default { store, persistor };
