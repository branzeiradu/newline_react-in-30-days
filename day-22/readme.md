## Testing in React

When discussing the testing process, we aim to automate the setup and measurement of our assumptions against assertions of functionality within our application.

Concerning front-end testing in React, we refer to the process of making assertions about what our React application renders and how it responds to user interaction.

There are three different software testing paradigms: unit testing, functional testing, and integration testing.

## Unit Testing

Unit testing involves testing individual pieces (or units, hence the name) of our code to ensure that these specific pieces of code work as expected.

For example, our application already includes reducers. These reducers comprise a single function that we can make assertions on under different scenarios. In React, unit tests typically do not require a browser, can run incredibly quickly (no writing to the DOM required), and the assertions themselves are usually simple and concise.

Let's concentrate on answering the question: with a given set of inputs, in our case, state and props, does the output match our expectations of what should be in the virtual DOM? In this case, we're testing the rendering output.

## Functional Testing

With functional testing, we focus on testing the behavior of our component. For instance, if we have a navigation bar with a user login/logout button, we can test our expectations that:
- Given a logged-in user, the navbar renders a button with the text "Logout."
- Given no logged-in user, the navbar renders a button with the text "Login."
Functional tests usually run in isolation. This way, the component's functionality is tested without the rest of the application.

## Integration Testing

This type of testing is used to test the entire service of our application and attempts to replicate the experience an end-user would have when using our application.

When it comes to speed and efficiency, integration tests are slow and need to run expectations/validations against a live, running browser, whereas unit tests and functional tests can run much faster. In React, functional tests run against the in-memory virtual DOM rather than an actual browser render.

When it comes to React components, we have to test both our expectations of what is contained in the virtual DOM, as well as what is reflected in the actual DOM.

## The Tools

For testing, we can use the Jasmine library, a library used to provide a readable testing API for writing assertions. See more at [https://jasmine.github.io/](https://jasmine.github.io/).

As far as testing running, there is a debate around which test runner is most efficient to work with, mainly between Mocha: [https://mochajs.org/](https://mochajs.org/) and Jest: [https://facebook.github.io/jest/](https://facebook.github.io/jest/).

We are going to use Jest in our testing with React as it's the official test runner. But take this with a grain of salt. Most of the code we'll be writing will be in Jasmine, so feel free to use Mocha if you want.

A very useful library called Enzyme will be used in functional testing. It provides some pretty nice React testing utility functions that make writing our assertions easy.