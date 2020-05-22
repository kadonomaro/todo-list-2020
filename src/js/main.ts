
import '@/css/style.scss';
import { List } from './components/List';
import { Render } from "./components/Render";

import { IItem } from './interfaces/Item';
import { LocalStorage } from './components/LocalStorage';

const storage = new LocalStorage();

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.js-add') as HTMLButtonElement;
    const titleInput = document.querySelector('.js-title') as HTMLInputElement;
    const progressBar = document.querySelector('.js-progress') as HTMLProgressElement;

    const todos: Array<IItem> = storage.load() || [
        {
            id: 1, 
            title: 'First',
            isComplete: false,
        },
        {
            id: 2, 
            title: 'Second',
            isComplete: false
        },
        {
            id: 3, 
            title: 'Third',
            isComplete: true
        },
        {
            id: 4, 
            title: 'Fourth',
            isComplete: true
        }
    ];
    const list = new List(todos);
    const render = new Render(list.todos, '.js-list');

    render.start();
    progressBarUpdate();

    addButton.addEventListener('click', addItem);
    document.addEventListener('click', removeItem);
    document.addEventListener('click', completeItem);

    function addItem(): void {
        if (titleInput.value) {
            list.add(titleInput.value);
            render.start();
            titleInput.value = '';
            progressBarUpdate();
            storage.save(list.todos);
        }
    }


    function removeItem(evt: Event): void {
        const button = evt.target as HTMLButtonElement;
        if (button.classList.contains('js-remove-item')) {
            const parent = button.closest('.item') as HTMLDivElement;
            list.remove(parent.dataset.id);
            render.start();
            progressBarUpdate();
            storage.save(list.todos);
        }
    }

    function completeItem(evt: Event): void {
        const checkbox = evt.target as HTMLInputElement;
        if (checkbox.classList.contains('js-complete-item')) {
            const parent = checkbox.closest('.item') as HTMLDivElement;
            list.update({
                id: parent.dataset.id || '',
                isComplete: checkbox.checked,
            });
            render.update(list.getIndex(parent.dataset.id));
            progressBarUpdate();
            storage.save(list.todos);
        }
    }

    function progressBarUpdate(): void {
        progressBar.max = list.todos.length;
        progressBar.value = list.getCompleted().length;
    }

    
});