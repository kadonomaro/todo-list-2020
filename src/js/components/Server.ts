import { IItem } from "../interfaces/Item";

export class Server {
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

    update() {

    }

    async delete(id: number | string | undefined) {
        const response = await fetch(this.url + id, {
            method: 'delete'
        });
    }

}