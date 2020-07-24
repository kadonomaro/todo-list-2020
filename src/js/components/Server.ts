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
        this.data = data.items;
        return this.data;
    }


    save() {

    }

    create() {

    }

    delete() {

    }

}