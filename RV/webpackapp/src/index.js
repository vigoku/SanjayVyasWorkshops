import React from "react"
import ReactDOM from "react-dom/client"
import PropTypes from "prop-types";
import "./style.css"
import App from "./App"

//~% Class style component
class Person extends React.Component{
    static propTypes = {
        id :  PropTypes.number,
        name :  PropTypes.string,
    }
    constructor(props){
        super(props); //this.props=props;
    }
    render(){
        //jsx, rendered by react on browsre
        return (<h1>Id {this.props.id+1} Person by name {this.props.name + "gum"} from {this.props.obj.country} say hello</h1>)
    }
}
// Person.propTypes = {
//     id:PropTypes.number,
//     name:PropTypes.string,
// };
class Person2 extends React.Component{
    constructor(props){
        super(props); //this.props=props;
    }
    render(){
        //jsx, rendered by react on browsre
        return (<h1 style={{backgroundColor:"red", color:"white"}}> Person2 [{this.props.student.id}, {this.props.student.name}] say hello</h1>)
    }
}
//~! Normal function component
function Person3(props){
    return <h1>Function react {props.id} / {props.name}</h1>;
}
//~# Arrow function component
const Person4 = props => <h1 style={{backgroundColor:"green", color:"red"}}>Arrow function {props.id} {props.name}</h1>

class Aray extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        let fragment = "";
        this.props.array.forEach(element => {
            fragment = fragment.concat(<><h1>{element}</h1><br></br></>);
            console.log(fragment.toString());
        });

        return fragment;
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

const h1 = <h1>This is a header, Webpack RoX.</h1>

root.render(<> 

<h2>Booya</h2>


</>);

root.render(<React.Fragment> 

    <h2>Booya1</h2>
    
    
    </React.Fragment>);

let student={id:1234, name:"Phantom"};
//Component 
// root.render(<>
// <Person id={1234} name={"Jornad Walkeshwar"} obj={{country:"IN"}}/>
// <Person2 student={{id:1234, name:"Phantom"}}/>
// <Aray array={[1,2,3,4,5,6]}></Aray>

// <Person3 id={1} name={"functional React"}></Person3>
// <Person4 id={4} name={"Arrow root powder"}/>
// </>);

root.render(<App/>)