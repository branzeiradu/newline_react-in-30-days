State.

React does not modify the set of properties sent to a component. If we were to pass a given property to a component and then the component itself was able to modify it, how do we know what is the value of that attribute sent? We will have to tackle race-conditions, confusing data states, and it would be a bad idea to modify a variable passed to a child component by a parent component.

But sometimes a component has to update its own state. For instance, setting a flag or updating a timer on a stopwatch.

While it is good to use component properties as much as you can, sometimes it is also useful or needed to save the state of a component. React gives the possibility to keep track of the state of our components by using the `state` object.

State of a component is intended to be completely internal to the component and its children, that means it should be accessed by the component and any children it uses.

Similar to a components properties, the state can be accessed using this.state in a component. A state of a componenent may be changed by calling `setState( { ... } )` method like so: 
    `this.setState({ /* new state of the component*/})`

Using the state you can change the state of a component and change the internal of a component by re-rendering it.

In order to keep track of any changes to a components internal data state you should set an initial state value inside a components constructor. Using ES6 class syntax, an initial value of a component's state can be set inside the `constructor()` function by setting `this.state` to a value.

        constructor(props) {
            super(props);
            this.state = { name: "John Doe", age: 26 };
        }


Always call super(props) as the first line of the constructor. Otherwise, there will be errors.

Instead of working directly with data values passed to properties, the `state` of the component can be updated and seperate the `render()` function from data management.

To update the state, a special function needs to be called: `setState( { ... } )`, which will trigger the component to re-reder whenever it detects changes in the state object.

If you need to execute a function right after the state has changed a callback function can be set 

        setState( {/* new state */}, () => {
            //callback function
        });

State updates will be asynchronous and React my batch multiple `setState()` calls into a single one for performance.

It is wrong to change the state properties of a component directly like so: `this.state.comment = 'Hi!'; `. Correct way is to call `this.setState()`. The only place where you can and should assign values for `this.state` is inside the constructor.

Because `this.state` and `this.props` will update asynchronous the developer should not rely on their values for calculating the next state value as done in the following example:

        this.setState({
            counter: this.state.counter + this.props.increment
        })

Correct way to set the new state based on the old state and the properties of a component is as follows:

        const newStatFn = (state, props) => {
            return {
                { name: props.name + " Wiliam", age : props.age }
            }
        }; 
        this.setState();

See also: https://stackoverflow.com/questions/32884780/how-can-i-remove-an-attribute-from-a-react-components-state-object        