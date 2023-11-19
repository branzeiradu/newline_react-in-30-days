To create a React stucture:
1. Write a root reducer
2. Create actionCreators
3. Configure the store with the root reducer, the store, and the app
4. connect the views to the action creators


In the Redux pattern only one global state is handled for the entire application, unlike flux.

Reducers are functions with the only responsability to return a representation of the next state.

The root reducer functiont takes charge of returning a representation of the current global state of the application.
When an action is sent to the store, the reducer function will be aclled with the current state of the application and the the action that causes the state to update.

At minimum, an action must include a `type` key.
The `type` key can be any value we want, but must always be present. Additional data cand be sent with our action, just add any keys neede to an action. This is commonly called adding a "payload". It's a convention to call any additional information to an action, besides the `type` key, as `payload`. Any payload data needs to have serializable values.

In the state reducer, check for the action type and create the expected updates to create the next state.

Reducers must return a state, so at minimum it should return at least the current state;

Redux offers a way to bind pieces of the state tree to different components using the connect() function exported by the react-redux package;

The connect() function expects us to pass in at least one argument to the function. First argument it expects is a function that will get called with the state and expects an object in return that connects data to the view.

The connect() function returns a function which expects the 1st argument to be that of a component. That component is called a high-order component