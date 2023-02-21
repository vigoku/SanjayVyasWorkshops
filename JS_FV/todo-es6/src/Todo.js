//~?Model
export default class Todo {
    static lastTodoId = 0;
    constructor(text, completed = false) {
        this.id = ++Todo.lastTodoId;
        this.text = text;
        this.completed = completed
    }
}