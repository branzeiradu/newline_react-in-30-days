import {FETCH_NEW_TIME, LOGIN} from './types';

// export const fetchNewTime = () => ({
//     type: FETCH_NEW_TIME,
//     payload: new Date().toString(),
// });

const host = 'https://andthetimeis.com'
export const fetchNewTime = (timezone = 'pst', str = 'now') => ({
    type: FETCH_NEW_TIME,
    payload: new Date().toString(),
    meta: {
        type: 'api',
        url: host + '/' + timezone + '/' + str + '.json'
    }
})

export const login = user => ({type: LOGIN, payload: user});