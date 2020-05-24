import { IItem } from '../interfaces/Item';

type ID = number | string | undefined;

export class List {
    public items: Array<IItem>
    constructor(items: Array<IItem>) {
        this.items = items || [];
    }

    add(title: string): void {
        this.items.push({
            id: Date.now().toString(),
            title: title,
            isComplete: false,
            createdAt: new Date()
        });
    }

    update({id, isComplete, title}: IItem): void {
        const index: number = this.items.findIndex(item => item.id?.toString() === id);
        this.items[index].isComplete = isComplete?.toString().length ? isComplete : this.items[index].isComplete;
        this.items[index].title = title || this.items[index].title;
    }

    remove(id: ID): void {
        if (id) {
            const index: number = this.items.findIndex(item => item.id?.toString() === id);
            this.items.splice(index, 1);
        }
    }

    clear(): void {
        this.items.length = 0;
    }

    getIndex(id: ID): number {
        return this.items.findIndex(item => item.id?.toString() === id?.toString());
    }

    getCompleted() {
        return this.items.filter(item => item.isComplete === true);
    }

}