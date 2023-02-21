/// MVC 
// Model
// View (Html)
// controller

class Template {
    
}

function addTodo() {
    let todoItem = document.querySelector("#todo-item");
    let list = document.querySelector("#todo-ol");
    //list.appendChild("<li>" + todoItem + "</li");
    if (todoItem.value != "") {
        const li = document.createElement("li");
        li.innerHTML = todoItem.value;
        list.appendChild(li);

        const buton = document.createElement("button");
        buton.innerHTML = "Done";
        buton.onclick = function () {
            li.style = "text-decoration:line-through";
            buton.style = "display:none";
        }
        li.append(buton);

        document.getElementById("todo-item").value = "";
    }
    document.getElementById("todo-item").focus();
}

function addTodoAdj() {
    let todoItem = document.querySelector("#todo-item")
    let todoItemValue = todoItem.value.trim();
    let list = document.querySelector("#todo-ol");
    if (todoItemValue != "") {

        const template = `
        <li>
            <input type = "checkbox"/>
            <button onclick = 'this.parentElement.remove();'>X</button>
            <label>${todoItemValue}</label>
        </li>
        
        `;
        list.insertAdjacentHTML("beforeend", template);
    }
    todoItem.value = "";
    todoItem.focus();
}

function sayHi() {
    alert("Hiya");
}

document.addEventListener("DOMContentLoaded", () => {
    const mainTemplate = `        <H3>Welcome to Todo</H3>
    <div id="container">
        <input id="todo-item" type="text" placeholder="Enter todo here" />
        <!-- button onclick="addTodoAdj();">Add</button-->
        <button id="add-todo-button">Add</button>
        <ol id="todo-ol">
            </ul>
    </div>`;
    let root = document.querySelector("#root");

    root.insertAdjacentHTML("beforeend", mainTemplate);

    const addButton = document.querySelector("#add-todo-button");
    addButton.addEventListener("click", addTodoAdj);
})