import TodoComponent from './TodoComponent.js';
import TodoRemoteService from './TodoRemoteService.js';
document.addEventListener("DOMContentLoaded", () => {
    new TodoComponent(new TodoRemoteService());
});