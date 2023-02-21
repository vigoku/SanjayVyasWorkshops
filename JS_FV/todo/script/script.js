/// MVC 
// Model
// View (Html)
// controller

//~?Model
class Todo {
    static lastTodoId = 0;
    constructor(text, completed = false) {
        this.id = ++Todo.lastTodoId;
        this.text = text;
        this.completed = completed
    }
}

class TodoLocalService {
    //CRUD

    constructor() {
        this.todoList = [];
        this.storageKey = "todo-app";
        // on init load all the todos from local storage to memory
        this.load()
    }

    load() {
        const tempTodo = JSON.parse(localStorage.getItem(this.storageKey));
        if (tempTodo != null)
            this.todoList = tempTodo;
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    }

    addTodo(text, completed = false) {
        const newTodo = new Todo(text, completed); // Create new item in memory 
        this.todoList.push(newTodo);
        this.save(); // after adding new item to memory, save to local storage
        return newTodo;
    }

    getAllTodos() {
        return this.todoList;
    }

    getTodo(id) {
        return this.todoList.find(todo => todo.id === id)
    }

    updateTodo(id, completed) {
        const foundTodo = this.todoList.find(todo => todo.id === id);
        if (foundTodo) {
            foundTodo.completed = completed;
        }
    }

    deleteTodo(id) {
        this.todoList = this.todoList.filter(todo => todo.id != id);
    }
}

class Template {

}

class TodoComponent {
    constructor(service) {
        this.service = service;
        this.createView();

        // this.todoList = localStorage.getItem("todo")?.split(',') ?? [];
        // this.todoList?.forEach(item => this.renderTodo(item));
        // console.log(this.todoList);

        this.service.getAllTodos()
        .forEach(todo => {
            this.renderTodo(todo);
        });

        const addButton = document.querySelector("#add-todo-button");
        addButton.addEventListener("click", () => {
            let todoItem = document.querySelector("#todo-item")
            let todoItemValue = todoItem.value.trim();
            const newTodo = this.service.addTodo(todoItemValue)
            this.renderTodo(newTodo);
            todoItem.value = "";
            todoItem.focus();
            // sessionStorage.setItem("todo", this.todoList);
            //localStorage.setItem("todo", this.todoList);
        });
    }
    createView() {
        const mainTemplate = `        <H3>Welcome to Todo</H3>
            <div id="container">
                <input id="todo-item" type="text" placeholder="Enter todo here" />
                <!-- button onclick="addTodoAdj();">Add</button-->
                <button id="add-todo-button">Add</button>
                <ul id="todo-ul">
                    </ul>
            </div>`;
        let root = document.querySelector("#root");
        root.insertAdjacentHTML("beforeend", mainTemplate);
    }

    renderTodo(todo) {

        //console.log(this.todoList);
        let list = document.querySelector("#todo-ul");
        if (todo != "") {

            const template = `
        <li>
        <input type = "checkbox"/>
        <button id = "xButton">X</button>
        <label>${todo.text}</label>
        </li>
        
        `;
            list.insertAdjacentHTML("beforeend", template);
            // const xButton = document.querySelector("#xButton");
            // xButton.addEventListener("click", () => {
            //     console.log(document.querySelector("#xButton+label").textContent);
            // });
        }



    }
    // deleteTodo() {
    //     console.log("Delete Todo Invoked");

    //     // this.parentElement.remove();this.removeTodo('${todoItemValue}');
    // }
    // removeTodo(todoItemValue) {
    //     //this.todoList = localStorage.getItem("todo")?.split(',') ?? [];
    //     let index = this.todoList.findIndex(todoItemValue);
    //     if (index > -1) {
    //         this.todoList.splice(index, 1)
    //     }
    //     localStorage.setItem("todo", this.todoList);
    // }
}
document.addEventListener("DOMContentLoaded", () => {
    new TodoComponent(new TodoLocalService());
});