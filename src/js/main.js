import { List } from "./components/List.js";

document.addEventListener('DOMContentLoaded', function () {
    
    const addButton = document.querySelector('.js-add');
    const titleInput = document.querySelector('.js-title');
    const list = new List();

    addButton.addEventListener('click', () => {
        list.add({
            title: titleInput.value
        });
        console.log(list.todo);
    });

});