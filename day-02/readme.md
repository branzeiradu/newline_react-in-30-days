ES5 - regular javascript which runs on all browsers today. Specification updated in 2009.

ES6 - is a new version of JS which adds improvements like functional & syntactical additions. Finished in 215, is almost supported by all major browsers, not yet fully adopted.

In order to take advantage of ES6 on all browsers we need to:
- transpile our code so that a wider range of browsers understand ES6 by converting it to ES5 JS syntax.
- include shim/polyfill which provides additional functionality added in ES6 that a browser may or may not have.

JSX - stands for JavaScrip eXtension and is a react extension that allows writing JavaScrip that looks like HTML.
In previous paradigms it is considered a bad practice to combine the scripting and markup in the same place.
It turns out combining the view with the functionality makes reasoning about the view straight-forward.

JSX allows to declare an element in a manner that closer resembles HTML:

<h1 className='large'>Hello World</h1>

is translated to:

React.createElement("h1",{className: "large"}, "Hello World")

When the component is rendered, it outputs a tree of react elements, or a virtual representation of the HTML elements this component outputs.
React determines what changes need to be made to the actual DOM based on this React element representation.
Since JSX is translated to JavaScript you can't use JS reserved words like "class" or "for"
React replaces "class" with "className" attribute for JSX. Other attributes, such as the "for" attribute on a label, are replaced by "htmlFor".
Instead of relying on the JSX compiler, we can just write the React.createElement().
For more complex components, JSX is more suited because it is easier to read.

<div>
  <img src="profile.jpg" alt="Profile photo" />
  <h1>Welcome back Ari</h1>
</div>

React.createElement("div", null,
  React.createElement("img", {src: "profile.jpg", alt: "Profile photo"}),
  React.createElement("h1", null, "Welcome back Ari")
);

You can skip JSX and write the latter directly, the JSX syntax is well-suited for representing nested HTML elements.