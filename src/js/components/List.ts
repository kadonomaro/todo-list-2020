import { IItem } from '../interfaces/Item';

type ID = number | string | undefined;

export class List {
    public items: Array<IItem>
    constructor(items: Array<IItem>) {
        this.items = items || [];
    }

    add(title: string): void {
        this.items.push({
            _id: Date.now().toString(),
            title: title,
            completed: false,
            createdAt: new Date()
        });
    }

    update({_id, completed, title}: IItem): void {
        const index: number = this.items.findIndex(item => item._id?.toString() === _id);
        this.items[index].completed = completed?.toString().length ? completed : this.items[index].completed;
        this.items[index].title = title || this.items[index].title;
    }

    remove(id: ID): void {
        if (id) {
            const index: number = this.items.findIndex(item => item._id?.toString() === id);
            this.items.splice(index, 1);
        }
    }

    clear(): void {
        this.items.length = 0;
    }

    getIndex(id: ID): number {
        return this.items.findIndex(item => item._id?.toString() === id?.toString());
    }

    getCompleted(): Array<IItem> {
        return this.items.filter(item => item.completed === true);
    }

    getIncompleted(): Array<IItem> {
        return this.items.filter(item => item.completed === false);
    }

}