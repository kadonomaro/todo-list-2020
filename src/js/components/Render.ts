import { IItem } from "../interfaces/Item";
import dateFilter from "../filters/dateFilter";

export class Render {
    public data: Array<IItem>
    public root: HTMLElement | null
    constructor(data: Array<IItem>, root: string) {
        this.data = data;
        this.root = document.querySelector(root);
    }

    start(): void {
        if (this.root) {
            this.root.innerHTML = '';
            for (const item of this.data) {
                this.root.innerHTML += this.setTemplate({
                    id: item.id,
                    title: item.title,
                    isComplete: item.isComplete,
                    createdAt: item.createdAt
                })
            }
        }
    }

    update(id: number): void {
        if (this.root) {
            this.root.children[id].innerHTML = this.setTemplate({
                id: this.data[id].id,
                title: this.data[id].title,
                isComplete: this.data[id].isComplete
            })
        }
    }

    private setTemplate({id, title, isComplete, createdAt}: IItem): string {
        return `
        <li class="todo__item">
            <div class="item ${isComplete ? 'item--completed' : ''}" data-id=${id}>
                <label class="checkbox">
                    <input type="checkbox" class="checkbox__input visually-hidden js-complete-item" ${isComplete ? 'checked' : ''}>
                    <span class="checkbox__custom"></span>
                </label>
                <label class="item__label">
                    <input type="text" class="item__title js-editable-item" value="${title}" readonly>
                    <time class="item__date">${dateFilter(createdAt || new Date)}</time>
                    <button class="item__edit js-edit-item"></button>
                </label>
                <button class="item__button js-remove-item"></button>
            </div>
        </li>
        `
    }
}


