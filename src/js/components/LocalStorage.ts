import { IItem } from "../interfaces/Item";

export class LocalStorage {

    save(data: Array<IItem>): void {
        localStorage.setItem('list', JSON.stringify(data));
    }

    load() {
        if (localStorage.getItem('list')) {
            return JSON.parse(localStorage.getItem('list') || '{}')
        }
    }

    reset() {
        localStorage.removeItem('list');
    }
}