
import '@/css/style.scss';
import { List } from './components/List';
import { Render } from "./components/Render";

import { IItem } from './interfaces/Item';
import { LocalStorage } from './components/LocalStorage';

const storage = new LocalStorage();

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.js-add') as HTMLButtonElement;
    const titleInput = document.querySelector('.js-title') as HTMLInputElement;


    const todos: Array<IItem> = storage.load() || [
        {
            id: 1, 
            title: 'First',
            isDone: false,
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
        },
        {
            id: 4, 
            title: 'Fourth',
            isDone: true
        }
    ];
    const list = new List(todos);
    const render = new Render(list.todos, '.js-list');



    render.update();

    addButton.addEventListener('click', addItem);
    document.addEventListener('click', removeItem);


    function addItem(): void {
        if (titleInput.value) {
            list.add(titleInput.value);
            render.update();
            titleInput.value = '';
            storage.save(list.todos);
        }
    }


    function removeItem(evt: Event): void {
        const button = evt.target as HTMLButtonElement;
        if (button.classList.contains('js-remove-item')) {
            const parent = button.closest('.item') as HTMLDivElement;
            list.remove(parent.dataset.id);
            render.update();
            storage.save(list.todos);
        }
    }

    
});