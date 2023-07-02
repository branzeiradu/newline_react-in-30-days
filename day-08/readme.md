## Reusable components.

In real working enviourement you need to make React components reusable acress apps and teams. Lets see how to annotate and pack our componenets.

React provides a way of specifing and validating these types that allow us to easily expose a component API. It helps with the documentation of a project but also it is good practice for building reusable react components.

The `prop-types` property of a component exports a bunch of different types inside an object which we can use to define what type a component's prop should be. 

We can define these using the propTypes method in the ES6 class style React prop.

        class Clock extends React.Component { }

        Clock.propTypes = { 
            key: value
        }
Where `key` is the name of the component prop 
and `value` is the PropType accepted.


From whithin this `prop`, we can define an object which as the key of a prop as the name of the prop and the value defines the type expected, or the types.

React exposes a few basic types we can use out of the box.

        TYPE                EXAMPLE             CLASS

        String              "hello"             PropTypes.string
        
        Number              10,0.1              PropTypes.number
        
        Boolean             true/false          PropTypes.bool
        
        Function            ()=>{ .. },         PropTypes.func 
        
                            function() 
                            { .. }
        
        Symbol              Symbol("msg)        PropTypes.symbol
        
        Object              { name: "Ariel" }   PropTypes.object
        
        Anything            "whatever", 10,     
                            { .. }, 
                            ()=>{ }
        
        Renderable      Clock               PropTypes.node


## Collection types.

Iterable collections can be passed through in `props`.
To declare a component's property to be of type array we use `PropTypes.array`.

A qualification can be made such an array holds only objects of a certain type using `PropTypes.arrayOf([]);


        TYPE                EXAMPLE             CLASS

        Array               []                  PropTypes.array
        
        Array of numbers    [1, 2, 3]           PropTypes.number
        
        Enum                ['Red', 'Blue']     PropTypes.oneOf([arr])

You can describe an object which can be one of a few different types by using `PropTypes.oneOfType([types])`

        Clock.propTypes = {
            counts      : PropTypes.array,
            users       : PropTypes.arrayOf(PropTypes.object),
            alarmColor  : PropTypes.oneOf(['red', 'blue']),
            description : PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.instanceOf(Title)
            ]),
        }

## Object types.

You can define types which can be of certain shape or instance of a certain class

        TYPE                EXAMPLE             CLASS

        Object               { name: 'Ari' }    PropTypes.object
        
        Number object       { count : 42 }      PropTypes.objectOf()
        
        Instance            new Message()       PropTypes.objectOf()

        Object shape        { name: 'Ari' }     PropTypes.shape()

Example:
    
        Clock.propTypes = {
            basicObject: PropTypes.object,
            numbers: PropTypes.objectOf,
            messages: PropTypes.instanceOf(Message),
            contact
        }


## React types.

It is useful for building templates and providing customization within to pass through React elements from a parent to a child.

        TYPE                EXAMPLE             CLASS

        Element             <Tite>              PropTypes.element

Example:

        Clock.propTypes = {
            displayEle: PropTypes.element
        }

When using type `element`, React expects a component to accept a single child component. So, you cant pass multiple elements.

An invalid example:

        <Clock displayElement={ 
            <div> Name </div>
            <div> Age </div>
        } />

A valid example:

        <Clock displayElement={ 
            <div>
                <div> Name </div>
                <div> Age </div>
            </div>
        } />


## Requiring types.

You can ask React explicitly to expect a mandatory property.

        Clock.propTypes = {
            title: PropTypes.name.isRequired
        }

Setting a `prop` as required is useful when a component depends on a `prop` to be passed by the parent component which will not work without it.      

## Custom types 

You can pass a function to define custom types. You can validate a single component propery or validate arrays. 

The single requirement for the custom funciton is if the validation fails, it expects to return an `Error` object.


        TYPE                EXAMPLE                 CLASS

        Custom              'something'             (props, propName, componentName) => { }
        
        CustomArray         ['something', 'again']  PropTypes.arrayOf((props, propName, componentName) => { })

Example:

        UserLink.propTypes = {
            userWithName: (props, propName, componentName) => {
                if (!props[propName] || !props[propName].name) {
                    const errMsg = `Invalid ${propName}.No name property defined for component ${componentName}`;
                    return new Error(errMsg);
                }
            }
        }


## Default props.

Sometimes we need a default value for a property.
For example, a `<Header/>` component might not require a title to be passed. If a title is not passed, we still want to render the component. Therefore, we can define a common title instead by setting it's default prop value.


        Header.defaultProps = {
            title: 'Bit news title'
        }


As a best practice to build reusable components, always use the `propTypes` and the `defaultProps` where it makes sense to.