import { IItem } from "../interfaces/Item";

export class Render {
    public data: Array<IItem>
    public root: HTMLElement | null
    constructor(data: Array<IItem>, root: string) {
        this.data = data;
        this.root = document.querySelector(root);
    }

    update(): void {
        if (this.root) {
            this.root.innerHTML = '';
            for (const item of this.data) {
                this.root.innerHTML += 
                `
                <li class="todo__item">
                    <div class="item ${item.isComplete ? 'item--completed' : ''}" data-id=${item.id}>
                        <label class="checkbox">
                            <input type="checkbox" class="checkbox__input visually-hidden js-complete-item" ${item.isComplete ? 'checked' : ''}>
                            <span class="checkbox__custom"></span>
                        </label>
                        <label class="item__label">
                            <input type="text" class="item__title" value="${item.title}" readonly>
                        </label>
                        <button class="item__button js-remove-item"></button>
                    </div>
                </li>
                `
            }
        }
    }
}
