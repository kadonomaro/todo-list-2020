export class Render {
    constructor({data, root, template}) {
        this.data = data;
        this.root = document.querySelector(root);
        this.template = template;
    }

    update() {
        this.root.innerHTML = '';
        this.data.map(item => {
            this.root.innerHTML += this.template.replace(/\{(.*)\}/g, (match, first) => {
                return item[first] || '';
            });
        });
    }
}


