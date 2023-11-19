import {FETCH_NEW_TIME, LOGIN} from './types';

export const fetchNewTime = () => ({
    type: FETCH_NEW_TIME,
    payload: new Date().toString(),
});

export const login = user => ({type: LOGIN, payload: user});