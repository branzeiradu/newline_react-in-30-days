//The simplest one
const HelloWorld = () => (<div>Hello, World!</div>);

// A notification component
const Notification = (props) => {
    const {level, message} = props;
    const  classNames = ["alert", "alert-" + level];
    return (
        <div className={classNames}>
            {message}
        </div>
    );
};

// In ES5
var ListIntem = function(props) {
    var handleClick = function(event) {
        props.onClick(event);
    }
    return (
        <div>
            <a href="#" onClick={handleClick}>
                {props.children}
            </a>
        </div>
    );
}