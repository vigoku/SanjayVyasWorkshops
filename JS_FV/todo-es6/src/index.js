import TodoComponent from './TodoComponent.js';
import TodoLocalService from './TodoLocalService.js';
document.addEventListener("DOMContentLoaded", () => {
    new TodoComponent(new TodoLocalService());
});