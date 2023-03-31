Data driven applications.

React gives the possibility to send data to a component in a similar manner to HTML attributes, or also known as properties of a component.

Properties of a component can be accessed by accessing it's context using this keyword "this.props"

        <HelloMessage personName="John" />

        class HelloMessage extends React.Component {
            render() {
                return (
                    <h1>Hello, {this.props.personName}!</h1>
                )
            }
        }


Inside the HelloMessage component we can access the attribute value using the "personName" property of this.props object.

By using component attributes you can pass: numbers, strings, objects, and functions.

Just like in HTML elements, we can pass multiple props into a component.

Instead of statically adding data to our application, we can replace data with properties passed in the components and reflect those in the template.