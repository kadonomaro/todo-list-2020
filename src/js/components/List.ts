import { IItem } from '../interfaces/Item';

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
            isDone: false
        });
    }

    update(id: number) {

    }

    remove(id: string | number | undefined) {
        if (id) {
            const index: number = this.todos.findIndex(item => item.id.toString() === id);
            this.todos.splice(index, 1);
        }
    }

    get length() {
        return this._length;
    }

}