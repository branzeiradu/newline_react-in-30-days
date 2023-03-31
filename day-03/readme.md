First component

Babel is a library for translating ES5 to ES6.
<script type="text/babel">

Babel will interpret this as a signal to handle the execution inside this script body. Note the type="text/babel" attribute.


Calling ReactDOM.render() will trigger the rendering of your application.
Without it, nothing will render the DOM.

All react components need to extend the React.Component class from the React package.

This render function is expected to return a virtual DOM representation of the browser DOM elements.

React components act just like any other element on the page and allow us to build a component tree just as if we were creating a native browser tree.