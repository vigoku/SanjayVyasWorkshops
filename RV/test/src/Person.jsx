import React from "react";

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, time: new Date() };
    }

    updateCounter = () => {
        //this.state.counter++;

        this.setState({ counter: this.state.counter+1, time: new Date() })
    }

    render() {
        return <><h1>Hello from Person</h1>
            <h2> Counter is {this.state.counter} at {this.state.time.toLocaleTimeString()}</h2>
            <button onClick={this.updateCounter}> Update</button></>
    }
}