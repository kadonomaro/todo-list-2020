export class Render {
    constructor({list, selector, tag}) {
        this.list = list;
        this.parent = document.querySelector(selector);
        this.tag = tag;
    }

    start() {
        this.list.map(item => {
            const child = document.createElement(this.tag);
            child.textContent = item.title;
            this.parent.append(child);
        });
    }


}