import { createStore, applyMiddleware } from "redux";
import { rootReducer, initialRootState } from "./reducers";
import loggingMiddleware from "./loggingMiddleware.js";

export const configureStore = () => {
  const store = createStore(rootReducer, initialRootState, applyMiddleware(loggingMiddleware));
  return store;
};

export default configureStore;