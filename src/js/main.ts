import { List } from "./components/List.js";
import { Render } from "./components/Render.js";

document.addEventListener('DOMContentLoaded', function () {
    
    const addButton = document.querySelector('.js-add');
    const titleInput = document.querySelector('.js-title');

    const todos = [
        {
            id: 1, 
            title: 'First',
            isDone: false
        },
        {
            id: 2, 
            title: 'Second',
            isDone: false
        },
        {
            id: 3, 
            title: 'Third',
            isDone: true
        }
    ];
    const list = new List(todos);
    const render = new Render({
        data: list.todos,
        root: '.js-list',
        template: `
            <li class="todo__item">
                <div class="item">
                    <input type="checkbox">
                    <span class="item__title">{title}</span>
                    <button class="item__button js-delete-item" data-id="{id}">X</button>
                </div>
            </li>
        `
    });


    render.update();

    addButton.addEventListener('click', () => {
        list.add({
            title: titleInput.value
        });
        render.update();
        titleInput.value = '';
    });


});