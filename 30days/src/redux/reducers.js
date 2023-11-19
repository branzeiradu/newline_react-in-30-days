import { FETCH_NEW_TIME } from "./types";

export const initialState = {
    //the state has a single key
    currentTime: new Date().toString()
};


// root reducers starts with the initial state 
// must return a representation of the next state
// first time it runs, the rootReducer is called with no arguments
// so it always return the initialState on the first run
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEW_TIME: {
            return { ...state, currentTime: action.payload };
        }
        default: {
            return state;
        }
    }
} 
