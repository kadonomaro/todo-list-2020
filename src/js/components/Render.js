export class Render {
    constructor({data, root, template}) {
        this.data = data;
        this.root = document.querySelector(root);
        this.template = template;
    }

    start() {
        this.data.map(item => {
            this.root.innerHTML += this.template.replace(/\{(.*)\}/g, (match, first) => {
                return item[first] || '';
            });
        });
    }

    update() {
        const last = this.data.length - 1;
        this.root.innerHTML += this.template.replace(/\{(.*)\}/g, (match, first) => {
            return this.data[last][first] || '';
        });
    }
}


