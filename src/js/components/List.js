export class List {
    constructor() {
        this.todos = [
            {
                id: 1, 
                title: 'First',
                isDone: false
            },
            {
                id: 2, 
                title: 'Second',
                isDone: false
            },
            {
                id: 3, 
                title: 'Third',
                isDone: true
            }
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