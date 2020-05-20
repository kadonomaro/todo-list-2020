import { IItem } from '../interfaces/Item';

type ID = number | string | undefined;

export class List {
    public todos: Array<IItem>
    private readonly _length: number
    constructor(todos: Array<IItem>) {
        this.todos = todos;
        this._length = this.todos.length;
    }

    add(title: string): void {
        this.todos.push({
            id: Date.now().toString(),
            title: title,
            isComplete: false
        });
    }

    update({id, isComplete, title}: IItem) {
        if (id) {
            const index: number = this.todos.findIndex(item => item.id.toString() === id);
            this.todos[index].isComplete = isComplete;
            this.todos[index].title = title || this.todos[index].title;
        }

    }

    remove(id: ID) {
        if (id) {
            const index: number = this.todos.findIndex(item => item.id.toString() === id);
            this.todos.splice(index, 1);
        }
    }

    get length() {
        return this._length;
    }

}