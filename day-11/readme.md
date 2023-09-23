## Pure components

React allows us to create pure, stateless components using a normal JavaScript function.

A _Pure_ component can replace a component that only has a render function. Instead of making a full-blown component just to render some content to the screen, we can create a pure one instead.

It easier to test pure components. React knows the properties sent into a component, so it can be deterministic in knowing if it has to re-render it or not.

Advantages:
    1. We can do away with the heavy lifting of components, no constructor, state, life-cycle madness, etc.
    2. no binding necesery, but no this and context access.
    3. presentation components dont care about buissness manipulation and hence dont care about component state manipulation
    4. more compact, easier to maintain components
    5. highlights badly written code
    6. they are faster
    7. easier to reuse 

Disadvantages:
    1. no this, no context access
    2. limited use
    3. no lifecycle hooks.


Overall, we have 3 ways to create react components, extending the react component class, pure components, and functional components.
        