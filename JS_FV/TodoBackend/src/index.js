const express = require("express");
const todoList = [
    {id:1, text: "Get Poha", completed:false},
    {id:2, text: "Get tea", completed:false},
    {id:3, text: "Drop Kid to class", completed:false}

];

function getAllTodos (req, res) {
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.send(JSON.stringify(todoList));
}
const app = express();
app.get("/", getAllTodos);

app.listen(10000, () => console.log("Server Started..."));