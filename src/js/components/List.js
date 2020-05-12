export class List {
    constructor() {
        this.todos = [
            {id: 1, title: 'First'},
            {id: 2, title: 'Second'}
        ];
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