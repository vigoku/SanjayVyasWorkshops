const TodoComponent = require('./TodoComponent');
const TodoLocalService = require ('./TodoLocalService')
document.addEventListener("DOMContentLoaded", () => {
    new TodoComponent(new TodoLocalService());
});