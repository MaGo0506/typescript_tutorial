export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li'), h4 = document.createElement('h4'), p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        pos === 'start' ? this.container.prepend(li) : this.container.append(li);
    }
}
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshi', age: 20 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'mario' }
};
const docFour = {
    uid: 2,
    resourceName: 'people',
    data: [1, 2]
};
console.log(docThree, docFour);
