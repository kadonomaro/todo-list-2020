import { IItem } from "../interfaces/Item";

export class LocalStorage {

    save(data: Array<IItem>): void {
        localStorage.setItem('list', JSON.stringify(data));
    }

    load(): Array<IItem> {
        if (!localStorage.getItem('list')) {
            return [];
        }
        return JSON.parse(localStorage.getItem('list') || '{}');
    }

    clear(): void {
        localStorage.removeItem('list');
    }
}