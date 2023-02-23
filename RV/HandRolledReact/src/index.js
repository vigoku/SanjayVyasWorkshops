import React from "react";
import ReactDOM from "react-dom/client";
//import "./myStyle.css"

const root = ReactDOM.createRoot(document.querySelector("#root"));
//const h1 = <h1>Hello JSX</h1>;//React.createElement ("h1", null, "Hello, Handrolled React");

const user = "VGK";
console.log(`User is ${user}`); //js string interpretation

//~! below is react interpolation. no Dollar
const div = <div>
    <h1>Welcome to JSX React, user '{'{user}'}', 2 + 2 = {2+2}</h1>
    <h1>Welcome to JSX React, user {'{' + user + '}'  }, 2 + 2 = {2+2}</h1>
    <h1>Welcome to JSX React, user {/*This is a comment*/}, 2 + 2 = {2+2}</h1>
    <input></input>
    <button>Babel</button>
</div> 
const myStyle = {
    "background-color" : "blue",
    color : "white"
}
const url = "https://www.saraswath-consulting.in";
const link1 = <a href = "https://www.vgkudva.com"> Vinayak Personal web </a>;
const link2 = <a href ={url}> Vinayak Office web</a>
const p = <p style={{backgroundColor:"green"}}>Dynamic React</p>
root.render(<div>
    {link1} 
    <br/> 
    {link2}
    {p}
    <h1>Welcome to JSX React, user '{'{user}'}', 2 + 2 = {2+2}</h1>
</div>);

console.log(typeof(div));
console.log(div);