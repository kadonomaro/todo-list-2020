export class List {
    constructor() {
        this.todo = [];
    }

    add({ title }) {
        this.todo.push({
            id: Date.now().toString(),
            title
        })
    }

    update(id) {

    }

    remove(id) {

    }
}