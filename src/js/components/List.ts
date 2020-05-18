interface IItem {
    id: number | string
    title: string,
    isDone: boolean
}

export class List {
    todos: Array<IItem>
    constructor(todos: Array<IItem>) {
        this.todos = todos;
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

    remove(id: number) {

    }
}