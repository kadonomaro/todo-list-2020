export class List {
    constructor(todos) {
        this.todos = todos;
    }

    add({ title }) {
        this.todos.push({
            id: Date.now().toString(),
            title
        });
    }

    update(id) {

    }

    remove(id) {

    }
}