import { List } from "./components/List.js";
import { Render } from "./components/Render.js";

document.addEventListener('DOMContentLoaded', function () {
    
    const addButton = document.querySelector('.js-add');
    const titleInput = document.querySelector('.js-title');
    const list = new List();

    const render = new Render({
        list: list.todos,
        selector: '.js-list',
        tag: 'li'
    });

    render.start();

    addButton.addEventListener('click', () => {
        list.add({
            title: titleInput.value
        });
    });

});