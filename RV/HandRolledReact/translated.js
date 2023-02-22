import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));
//const h1 = <h1>Hello JSX</h1>;//React.createElement ("h1", null, "Hello, Handrolled React");

const div = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to JSX React"), /*#__PURE__*/React.createElement("input", null), /*#__PURE__*/React.createElement("button", null, "Babel"));
root.render(div);
