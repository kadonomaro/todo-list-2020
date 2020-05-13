export class Render {
    constructor({list, root, template}) {
        this.list = list;
        this.root = document.querySelector(root);
        this.template = template;
    }

    start() {
        this.list.map(item => {
            this.root.innerHTML += this.template.replace(/\{(.*)\}/g, (match, first) => {
                return item[first];
            });
        });
    }

    update() {
        const last = this.list.length - 1;
        this.root.innerHTML += this.template.replace(/\{(.*)\}/g, (match, first) => {
            return this.list[last][first];
        });
    }
}


