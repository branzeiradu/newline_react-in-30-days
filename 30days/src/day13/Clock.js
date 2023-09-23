import React, { Component } from 'react';

const Hour = (props) => {
    let { hours } = props;
    if (hours === 0) { hours = 12; }
    if (props.twelveHours) { hours -= 12; };

    return (<span>{hours}</span>);
}
const Minute = ({ minutes }) => (
    <span>{minutes < 10 && '0'}{minutes}</span>
)
const Second = ({ seconds }) => (
    <span>{seconds < 10 && '0'}{seconds}</span>
)
const Separator = ({ separator }) => (<span>{separator || ':'}</span>)
const AmPm = ({ hours }) => (<span>{hours >= 12 ? 'pm' : 'am'}</span>)


const TimeFormatter = (props) => {
    const mapper = (e, idx) => {
        if (e === 'h') {
            return <Hour key={idx} {...props} />
        } else if (e === 'm') {
            return <Minute key={idx} {...props} />
        } else if (e === 's') {
            return <Second key={idx} {...props} />
        } else if (e === 'p') {
            return <AmPm key={idx} {...props} />
        } else if (e === ' ') {
            return <span key={idx}> </span>;
        } else {
            return <Separator key={idx} {...props} />
        };


    };

    let children = props.format.split("").map(mapper);
    const cloner = (c) => React.cloneElement(c, props);
    return (
        <span>
            {
                React.Children.map(children, cloner)
            }
        </span>
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    componentDidMount() {
        this.setTimer();
    }

    setTimer() {
        //clearTimeout(this.timeout);
        this.interval = setInterval(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }

    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        }
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;
        return (
            <div className='clock'>
                <TimeFormatter
                    {...this.props}
                    state={this.state}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    ampm={ampm}
                />
            </div>
        );
    }

}
export default Clock;