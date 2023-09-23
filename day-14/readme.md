Promise objects are wrapper objects around a value that is yet to be know when the object is instantiated.
Promises provides two methods for handling the value after is is known. By that point the Promise is known to be resolved.
If there is an error which fails to resolve the promise and the value is unknown we will say the promise was rejected.

Using promises gives the developer the opportunity to associate functionality for an ascynchrous (complex) operation wich can result in success or in failure.

The result of a promise can be used only a single time, and this is known as sungle use guarantee.
A promise can have only one of the three states at a given time: pending, resolved, rejected.
From a pending state, a promise can enter either the resolved state or rejected state only once. That means you can return from a promise once, and call either resolved or rejected. You cant reuse a promise only create a new one.

Using a promise constructor, a function can be passed which accepts two parameters. Those two parameters are functions to be called on success resolution or if an error occurs for a failure rejection.

The `whatwg-fetch`` object is unique in that it is one of the few libraries which attaches it's export on the `global`` object. In case of the browser, it is the `window`` object. Unlinke the `react` library we don't need to get a handle on it's export as the library makes it available on the global object.