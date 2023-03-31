React is a js library for building interfaces.
It deals with the view layers of a web application.

All react applications are built around components.
A component is a self contained module which renders something.
A component can be composed of other components.

Each component is bound by strict data management principles.
User interfaces often involve complete data and application states.
React gives tools to anticipate how the app will look like within a given set of data (state).

React operates on a virtual DOM.
Rather than operating on the document object itself, React will create a virtual DOM in-memory and decide what changes need to reflect in the real DOM. When you are writing a React component, the component is not written directly into the real DOM, instead to a virtual component which React will turn into the DOM.