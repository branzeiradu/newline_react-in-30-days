import {createStore, combineReducers} from "redux";
import { reducer as timeReducer, initialState as timeInitialState} from "./reducers";
import { reducer as userReducer, initialState as userInitialState } from './currentUser';



// export const configureStore = () => {
//     const store = createStore(rootReducer, timeInitialState);
//     return store;
// }
const initialState = {
        time: timeInitialState,
        user: userInitialState
      } // our initialState
export const configureStore = () => {
    const store = createStore(
      combineReducers({
        time: timeReducer,
        user: userReducer
      }), // root reducer
      initialState
    );
  
    return store;
  };

export default configureStore;