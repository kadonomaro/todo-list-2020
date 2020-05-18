
import { List } from './components/List';
import { Render } from "./components/Render";

import { IItem } from './interfaces/Item';
import '@/css/style.scss';


document.addEventListener('DOMContentLoaded', function () {
    
    const addButton = document.querySelector('.js-add') as HTMLButtonElement;
    const titleInput = document.querySelector('.js-title') as HTMLInputElement;


    const todos: Array<IItem> = [
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
    const render = new Render(list.todos,'.js-list');


    render.update();

    addButton.addEventListener('click', () => {
        list.add(titleInput.value);
        render.update();
        titleInput.value = '';
        console.log(list.todos);
    });


});