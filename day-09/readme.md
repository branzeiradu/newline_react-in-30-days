## Styles

Adding styles to our actual components allows to define the styles inside the components, and dynamically update styles based upon different states of the app.

React gives a way to style a component using a JS object.
Instead of using CSS classes to define the style, let's look at defining inline styles using the `style` property. 
That property is expected to be an object with camel-cased keys. Each key define a style names and values.

Example:

        render() {
            const styleObj = { color: 'blue' };
            <div style={styleObj}>
                This text will have the color blue
            </div>
        }
        


As we need to use camel case for JS defined styles. So, any old css property is invalid, like: `background-color`.
React needs `backgroundColor` in ordet to understand the css property.

You can always use className to define a class attribute on your components:

        render() {
            <div className="header">
                This text will have the color blue
            </div>
        }

Where css class `.header` is defined in your stylesheet.

