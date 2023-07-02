(Classic) Lifecycle Hooks.

Let's talk about how a component "lives" inside an application. Hence, the phrase a component's lifecycle.

As React mounts our application, it opens some hooks which we can use to insert our own functionality at different times in a componenets lifecycle. In order to hook into the lifecycle, we'll need to define functions on our component which React calls at the appropriate time for each hook. 


## componentWillMount() / componentDidMount()

Because we are defining virtual representations of nodes in the DOM tree using React, we are not defining real DOM nodes.
Actually, we are building an in-memory representation of what the application should look like and do, which React maintains and manages.
When we are talking about mounting, we are speaking about the process of converting the virtual components into actual DOM elements which are placed in the real DOM by React.

When a component is defined on a page in our application , we can't depend upon it to available in the DOM immediatly because we are defining a vritual node. So, we have to wait until the component itself has actually mounted in the browser.

For functionality we need to run when it has been mounted, we have to different functions/hooks we can use:
    - first one is called before the componenent is due to be mounted on the page: `componentWillMount()`
    - the second one is called right after the component has been mounted: `componentDidMount()`

These hooks are useful for fetching data to populate the component.
For example, let's say that we want to use our timeline to display github events. We will want to load these events only when the data itself is going to render.

## componentWillUpdate() / componentDidUpdate()

Sometimes we'll want to update some data of our component before or after
we change the actual rendering. For instance, let's say we want to call a
function to set up the rendering or call a function set when a component's
props are changed. The componentWillUpdate() method is a reasonable hook
to handle preparing our component for a change (as long as we don't call
this.setState() to handle it as it will cause an infinite loop).


Sometimes you need to update data in your component before its actual rendering.
Let's say you want to call a rendering to setup the rendering, or call a function when a components properties are changed.
Both methods are good hooks to handle preparing our component for a change, as long as we dont call `this.setState()` which will cause an infinite loop.


## componentWillReceiveProps()

React will call this method when the component is about to receive new `props`.

This is the first method called when a component is going to receive a new set of properties. This method is a good place to look for updates to specific `props` as it gives an opportunity to calculate changes and update our component's internal state. This is the place to update a components state based on new `props.`

One thing to keep in mind is that even this method is the first one to be called, the value of `props` may not actually change. It is always a good idea to  check for changes in the `prop` values.

## componentWillUnmount()

Right before a component is unmounted, before the virtual representation is removed for a component, React will call out the componentWillUnmount() method.
This is good time to do any clean-up on the component: clearing timeouts, clearing data, disconnecting web sockets, etc.
