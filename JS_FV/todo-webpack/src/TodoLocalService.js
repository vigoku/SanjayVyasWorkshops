const Todo = require ('./Todo');
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

module.exports=TodoLocalService;