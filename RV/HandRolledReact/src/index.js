import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
//const h1 = <h1>Hello JSX</h1>;//React.createElement ("h1", null, "Hello, Handrolled React");

const div = <div>
    <h1>Welcome to JSX React</h1>
    <input></input>
    <button>Babel</button>
</div>
root.render(div);