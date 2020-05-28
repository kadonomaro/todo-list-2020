
import '@/css/style.scss';
import { List } from './components/List';
import { Render } from "./components/Render";
import { LocalStorage } from './components/LocalStorage';
import { IItem } from './interfaces/Item';


document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.js-add') as HTMLButtonElement;
    const clearButton = document.querySelector('.js-clear') as HTMLButtonElement;
    const titleInput = document.querySelector('.js-title') as HTMLInputElement;
    const itemsSwitch = document.querySelector('.js-switch-items') as HTMLSelectElement;
    const progressBar = document.querySelector('.js-progress') as HTMLProgressElement;

    const storage = new LocalStorage();
    const items: Array<IItem> = storage.load();
    const list = new List(items);
    const render = new Render(list.items, '.js-list');

    render.start();
    progressBarUpdate();

    addButton.addEventListener('click', addItemHandler);
    clearButton.addEventListener('click', clearItemsHandler);
    itemsSwitch.addEventListener('change', switchItemsHandler);
    document.addEventListener('click', removeItemHandler);
    document.addEventListener('click', completeItemHandler);
    document.addEventListener('click', editItemHandler);


    function addItemHandler(): void {
        if (titleInput.value) {
            list.add(titleInput.value);
            render.start();
            titleInput.value = '';
            progressBarUpdate();
            storage.save(list.items);
        } else {
            const parent = titleInput.closest('.item') as HTMLDivElement;
            parent.classList.add('item--error');
            parent.classList.add('item--shake');
            setTimeout(() => {
                parent.classList.remove('item--error');
                parent.classList.remove('item--shake');
            }, 800);
        }
    }


    function removeItemHandler(evt: Event): void {
        const button = evt.target as HTMLButtonElement;
        if (button.classList.contains('js-remove-item')) {
            const parent = button.closest('.item') as HTMLDivElement;
            list.remove(parent.dataset.id);
            render.start();
            progressBarUpdate();
            storage.save(list.items);
        }
    }


    function completeItemHandler(evt: Event): void {
        const checkbox = evt.target as HTMLInputElement;
        if (checkbox.classList.contains('js-complete-item')) {
            const parent = checkbox.closest('.item') as HTMLDivElement;
            list.update({
                id: parent.dataset.id,
                isComplete: checkbox.checked,
            });
            // render.update(list.getIndex(parent.dataset.id));
            switch (itemsSwitch.value) {
                case 'all':
                    render.start();
                    break;
                case 'completed':
                    render.start(list.getCompleted());
                    break;
                case 'incompleted':
                    render.start(list.getIncompleted());
                    break;
                default:
                    break;
            }

            progressBarUpdate();
            storage.save(list.items);
        }
    }


    function editItemHandler(evt: Event): void {
        const button = evt.target as HTMLInputElement;
        if (button.classList.contains('js-edit-item')) {
            const parent = button.closest('.item') as HTMLDivElement;
            const title = parent.querySelector('.js-editable-item') as HTMLInputElement;
            
            title.toggleAttribute('readonly');
            title.classList.toggle('input--edited');
            title.focus();
            title.selectionStart = title.selectionEnd = title.value.length;
            button.classList.toggle('button--confirm');

            if (typeof title?.getAttribute('readonly') === "string") {
                list.update({
                    id: parent.dataset.id,
                    title: title?.value
                });
                render.update(list.getIndex(parent.dataset.id));
                progressBarUpdate();
                storage.save(list.items);
            }
        }
    }


    function clearItemsHandler(): void {
        storage.clear();
        list.clear();
        render.start();
        progressBarUpdate();
    }


    function switchItemsHandler(evt: Event): void {
        const select = evt.target as HTMLSelectElement;
        switch (select.value) {
            case 'all':
                render.start();
                break;
            case 'completed':
                render.start(list.getCompleted());
                break;
            case 'incompleted':
                render.start(list.getIncompleted());
                break;
            default:
                break;
        }
    }
    

    function progressBarUpdate(): void {
        progressBar.max = list.items.length;
        progressBar.value = list.getCompleted().length;
    }

    
});