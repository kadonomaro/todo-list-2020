import { IItem } from "../interfaces/Item";

export class Render {
    public data: Array<IItem>
    public root: HTMLElement | null
    constructor(data: Array<IItem>, root: string) {
        this.data = data;
        this.root = document.querySelector(root);
    }

    update() {
        if (this.root) {
            this.root.innerHTML = '';
            for (const item of this.data) {
                this.root.innerHTML +=             `
                <li class="todo__item">
                    <div class="item" data-id=${item.id}>
                        <input type="checkbox">
                        <span class="item__title">${item.title}</span>
                        <button class="item__button js-remove-item"></button>
                    </div>
                </li>
                `
            }
        }
    }
}
