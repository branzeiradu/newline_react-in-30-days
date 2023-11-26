const loggingMiddleware = (store) => {
    // this function is called by applyMiddleware 
    // so our middleware can have access to the state store
    return (next) => {
        // parameter next is the following action to be run
        // after this middle ware logic runs
        return (action) => {
            // logic for our middleware
            console.log("Redux log" + JSON.stringify(action));
            console.log(store);
            if (!action.meta || action.meta.type !== 'api') {
                next(action);
            }

            //handle an api action
            //if an action does have a meta object with a type of 'api'
            //pick the request in the apuMiddleware
            //TOODO this can go in a different class
            const {url} = action.meta;
            const fetchOptions = Object.assign({}, action.meta);

            fetch(url, fetchOptions)
            .then(resp => resp.json())
            .then(json => {
                if (typeof action.meta.onSuccess === 'function') {
                    action.meta.onSuccess(json);
                    return json; // handle next promise in the chain
                } 
            })
            .then(json => {
                //respond back to the user
                // by dispatching the original 
                //action without the meta object
                let newAction = Object.assign({}, action, {
                    payload: json.dateString
                });

                delete newAction.meta;
                store.dispatch(newAction);
            })
        }
    }
}

export default loggingMiddleware;