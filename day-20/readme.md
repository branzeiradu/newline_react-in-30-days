## Redux actions
The only way to change data in Redux is by sending an action through an action creator.

Steps to follow:
1. create an action creator to dispatch the action on our store
2. call the action creator based on event: i.e user interaction.
3. handle the action in the reducer



An action is a simple object that must include a type property and value to identify the payload.

    export const FETCH_NEW_TIME = 'FETCH_NEW_TIME';
    export const LOGIN = 'USER_LOGIN';
    export const LOGOUT = 'USER_LOGOUT';

    {
        type: types.FETCH_NEW_TIME,
        payload: new Date().toString()
    } // Any extra data is considered a payload

In order to dispatch this along our store, we can call the store. dispatch function as follows:

    store.dispatch({
        type: types.FETCH_NEW_TIME, 
        payload: new Date().toString()
    });

However, this is considered bad practice.
Instead of dispatching the action directly, we'll use a function to return an action. This function creates the action, hence the name of `actionCreator`. This way it is easier to test, maintain, reuse, document, and encapsulate the logic.

## Multi-reducers

Redux provides a way to split up a root redux reducer into multiple reducers, each responsible for only a leaf of the state tree.

Use `combineReducers()` export from `redux` to compose an object of reducer functions.
For every action that gets triggered, each of these functions will be called with the corresponding action.
