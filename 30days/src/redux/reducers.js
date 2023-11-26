import { combineReducers } from 'redux';

import * as currentUser from './currentUser';
import * as currentTime from './currentTime';

export const initialRootState = {
    time: currentTime.initialState,
    user: currentUser.initialState
};

export const rootReducer = combineReducers({
    time: currentTime.reducer,
    user: currentUser.reducer
});

