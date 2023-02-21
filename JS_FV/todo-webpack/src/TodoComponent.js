
class TodoComponent {
    constructor(service) {
        this.service = service;
        this.createView();

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

        }



    }
}

module.exports=TodoComponent;