import { IItem } from "../interfaces/Item";
type ID = number | string

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
                    isComplete: item.isComplete
                })
            }
        }
    }

    update(id: number):void {
        if (this.root) {
            this.root.children[id].innerHTML = this.setTemplate({
                id: this.data[id].id,
                title: this.data[id].title,
                isComplete: this.data[id].isComplete
            })
        }
    }

    private setTemplate({id, isComplete, title}: IItem): string {
        return `
        <li class="todo__item">
            <div class="item ${isComplete ? 'item--completed' : ''}" data-id=${id}>
                <label class="checkbox">
                    <input type="checkbox" class="checkbox__input visually-hidden js-complete-item" ${isComplete ? 'checked' : ''}>
                    <span class="checkbox__custom"></span>
                </label>
                <label class="item__label">
                    <input type="text" class="item__title" value="${title}" readonly>
                </label>
                <button class="item__button js-remove-item"></button>
            </div>
        </li>
        `
    }
}


