import {LOGIN, LOGOUT} from './types'

export const initialState = {
    user: {},
    loggedIn: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
                loggedIn: false

            }
        default:
            return state
    }
}