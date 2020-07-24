import { IItem } from "../interfaces/Item";
type ID = number | string | undefined;

export class Database {
    public url: string;
    private data: Array<IItem> = [];
    constructor(url: string) {
        this.url = url;
    }

    async load() {
        const response = await fetch(this.url);
        const data = await response.json();
        return this.data = data.items;
    }


    async create(title: string) {
        const response = await fetch(this.url, {
            method: 'post',
            body: JSON.stringify({
                title,
                completed: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async update({_id, completed, title}: IItem) {
        const response = await fetch(this.url + _id, {
            method: 'put',
            body: JSON.stringify({
                title,
                completed
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async delete(id: ID) {
        const response = await fetch(this.url + id, {
            method: 'delete'
        });
    }

}