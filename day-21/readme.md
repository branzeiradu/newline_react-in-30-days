## Redux middle ware

Middleware refers to software services which stick together different features of an existing software. For Redux, a middleware provides a thrid party extension point between dispatching an action and handling the action off to the reducer:

    [Action] <--> [Middleware] <--> [Dispatcher]

Middleware examples: logging, crash reporting, routing, handling async requests, etc.

In React, the middleware sits between the action and the reducer. It can listen for all dispatches and execute code with the details.

It is simply defined as a function which accepts the `store` object, and is expected to return a function which accepts an action object.

Simplest middleware possible:

    const loggingMiddleware = function(store) {
        // Called when calling applyMiddleware so
        // our middleware can have access to the store

        return function(next) {
        // next is the following action to be run
        // after this middleware

        return function(action) {
            // finally, this is where our logic lives for
            // our middleware.

            // Our middleware
            console.log(`Redux Log:`, action)
            // call the next function
            next(action);
        }
    }
    }

Or, by using arrow functions:

    const middleware = (store) => (next) => (action) => {
        //our middleware
        //call the next function
        next(action)
    }

To apply middleware, we call the `applyMiddleware()` function in the `createStore()` method as the third argument.

    // ...
    import { createStore, applyMiddleware } from 'redux'
    // ...
    const store = createStore(rootReducer, initialState, applyMiddleware(middleware));


Middleware gives us the ability to insert a function in our Redux action call chain.
Inside that function, we have access to the action, state, and we can dispatch other actions.

We can create middlewares that listens only to actions corresponding to API requests.
The middleware can "watch" for actions that have a special marker.

We can respond back with the same type of the request was fired off without the `meta` tag and placing the response body as the payload of the new action.

It does not need to be limited to a single response either. Let's say that our user passed in an `onSuccess` callback to be called when the request was completed. We can call the `onSuccess` callback and then dispatch back up the chain.