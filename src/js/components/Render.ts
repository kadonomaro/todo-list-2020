import { IItem } from "../interfaces/Item";
import dateFilter from "../filters/dateFilter";

export class Render {
    public data: Array<IItem>
    public root: HTMLElement | null
    constructor(data: Array<IItem>, root: string) {
        this.data = data;
        this.root = document.querySelector(root);
    }

    start(data?: Array<IItem>): void {
        if (this.root) {
            this.root.innerHTML = '';
            typeof data === 'object' ? '' : data = this.data;
            for (const item of data) {
                this.root.innerHTML += this.setTemplate({
                    _id: item._id,
                    title: item.title,
                    completed: item.completed,
                    createdAt: item.createdAt
                })
            }
        }
    }

    update(id: number): void {
        if (this.root) {
            this.root.children[id].innerHTML = this.setTemplate({
                _id: this.data[id]._id,
                title: this.data[id].title,
                completed: this.data[id].completed,
                createdAt: this.data[id].createdAt
            })
        }
    }

    private setTemplate({_id, title, completed, createdAt}: IItem): string {
        return `
        <li class="todo__item">
            <time class="todo__date">${dateFilter(createdAt || new Date())}</time>
            <div class="item ${completed ? 'item--completed' : ''}" data-id=${_id}>
                <label class="checkbox">
                    <input type="checkbox" class="checkbox__input visually-hidden js-complete-item" ${completed ? 'checked' : ''}>
                    <span class="checkbox__custom"></span>
                </label>
                <label class="item__label">
                    <input type="text" class="input js-editable-item" value="${title}" readonly>
                </label>
                <button class="button button--edit js-edit-item"></button>
                <button class="button button--remove js-remove-item"></button>
            </div>
        </li>
        `
    }
}


