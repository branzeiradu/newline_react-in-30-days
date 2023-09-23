import React, { Children } from "react";
import Clock from "./Clock";

const array = [1, 10, 100, 1000, 10000];
const ShowA = () => <div>{array}</div>;
const MultiplyA = () => <div>{array[1] * array[0]}</div>

const Repeater = () => {
    return (
        <ul>{ React.Children.map(array, i => <li>{i}</li>) }</ul>
    )
};

const App = props => {
    const currentTime = new Date();
    const timeObj = {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }

    return (
        <div className="app">
            <ShowA />
            <MultiplyA />
            <Repeater/> 
            <Clock format="h:m:s p"/>
        </div>
    );
}

export default App;