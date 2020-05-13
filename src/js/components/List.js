export class List {
    constructor() {
        this.todos = [
            {id: 1, title: 'First'},
            {id: 2, title: 'Second'},
            {id: 3, title: 'Third'}
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