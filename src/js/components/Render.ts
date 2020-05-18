// export class Render {
//     constructor({data, root}) {
//         this.data = data;
//         this.root = document.querySelector(root);
//     }

//     update() {
//         this.root.innerHTML = '';
//         this.data.map(item => {
//             this.root.innerHTML += this.template.replace(/\{(.*)\}/g, (match, first) => {
//                 return item[first] || '';
//             });
//         });
//     }
// }


