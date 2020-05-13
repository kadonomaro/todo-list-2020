export class Render {
    constructor({list, root, template}) {
        this.list = list;
        this.root = document.querySelector(root);
        this.template = template;
    }

    start() {
        this.list.map(item => {
            this.root.innerHTML += this.template.replace('#title', item.title);
        });
    }
}