import { IItem } from "../interfaces/Item";

export class Render {
    public data: Array<IItem>
    public root: HTMLElement | null
    constructor(data: Array<IItem>, root: string) {
        this.data = data;
        this.root = document.querySelector(root);
    }

    update() {
        this.root?.innerHTML = '';
        for (const item of this.data) {
            const parent = document.createElement('li') as HTMLLIElement;
            parent.classList.add('todo__item');

            const child = document.createElement('div') as HTMLDivElement;
            child.classList.add('item');
            child.dataset.id = item.id.toString();

            const checkboxElement = document.createElement('input') as HTMLInputElement;
            checkboxElement.setAttribute('type', 'checkbox');
            checkboxElement.classList.add('item');
            item.isDone ? checkboxElement.checked = true : checkboxElement.checked = false;

            const titleElement = document.createElement('span') as HTMLSpanElement;
            titleElement.classList.add('item__title');
            titleElement.textContent = item.title;

            const buttonElement = document.createElement('button') as HTMLButtonElement;
            buttonElement.classList.add('item__button', 'js-remove-item');

            child.append(checkboxElement);
            child.append(titleElement);
            child.append(buttonElement);

            parent.append(child);
            
            this.root?.append(parent);
        }

    }
}
