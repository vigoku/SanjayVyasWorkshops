import React from "react";

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, time: new Date() };
        //binding
        this.updateCounter = this.updateCounter.bind(this);
        console.log("Constructor called!")
    }

    // updateCounter = () => {
    //     //this.state.counter++;

    //     this.setState({ counter: this.state.counter+1, time: new Date() })
    // }

    static getDerivedStateFromProps() {
        console.log("Get Derived State from Props called!")
        return null;
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    shouldComponentUpdate() {
        console.log("Should component update");

        if (this.state.counter % 3 == 0)
            return true;
        else
            return false;
    }


    getSnapshotBeforeUpdate(){
        console.log("Get Snapshot before update");
        return null;
    }
    updateCounter() {
        //this.state.counter++;

        this.setState({ counter: this.state.counter + 1, time: new Date() })
    }

    render() {
        console.log("Render");
        return <><h1>Hello from Person</h1>
            <h2> Counter is {this.state.counter} at {this.state.time.toLocaleTimeString()}</h2>
            <button onClick={this.updateCounter}> Update</button></>
    }
}