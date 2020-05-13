import { List } from "./components/List.js";
import { Render } from "./components/Render.js";

document.addEventListener('DOMContentLoaded', function () {
    
    const addButton = document.querySelector('.js-add');
    const titleInput = document.querySelector('.js-title');
    const list = new List();

    const render = new Render({
        list: list.todos,
        root: '.js-list',
        template: `
            <li class="todo__item">
                <div class="item">
                    <input type="checkbox" checked='{isDone}'>
                    <span class="item__title">{title}</span>
                    <button class="item__button">X</button>
                </div>
            </li>
            
        `
    });

    render.start();

    addButton.addEventListener('click', () => {
        list.add({
            title: titleInput.value
        });
        render.update();
    });

});