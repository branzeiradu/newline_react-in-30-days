Flux data flow.

Flux is a pattern used to specify how data flows inside a React application.
The preferred method of working with React components is through passing data  from a parent component to it's children components.

The Flux patter uses this method as the standard way of handling data.

The distinct roles for dealing with data:
- dispatcher
- stores
- views

The idea behing Flux is that there is a single source of truth (inside the store object), which in turn can be updated only by triggering actions.
The actions are responsible for calling the dispatcher, Stores can subscribe to Dispatchers for changes and update their own data accordingly. 

When a dispatch has been triggered, and the store is updated, it will emit a change event which can render accordingly.


    [ACTION] -->  [DISPATCHER]  -->  [STORE]  -->  [VIEW]
    
    Data flows in one direction and is kept entirely inside the stores.

Trying to pick the right choice for our applications can be intense.
Each have their own features and are great for different reasons.
To a large extend the React community as focused in on using another flux tool named Redux.

Redux.

Redux is a library inspired by the Flux patter, but is not a pure flux implementation.
It provides the same general principles around how to update the data in a React application, but in a diferent way none the less.

In contrast to Flux, Redux does not use a dispatcher, but instead uses pure functions to define data mutating functions. 

Three principles of Redux.

- single source of truth:
    
    The application state is stored in a single global state.
    
    State, also called the state (object) tree is a broad term. In the Redux API it usually refers to the single state value which is managed by the store and returned by `getState()`. It represents the entire state of a Redux application, oftern a deeply nested object.

    Recomended to keep the state serializable, do not put anything inside it that can't easily be turned into a JSON.

- state is read-only
    
    The only way to change the state is to emit an action.

