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
// let docOne = addUID({name: 'Yoshi', age: 20});
// console.log(docOne.name)
//with Interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T
// }
//
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'mario'}
// }
//
// const docFour: Resource<number[]> = {
//     uid: 2,
//     resourceName: 'people',
//     data: [1, 2]
// }
//
// console.log(docThree, docFour)
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'mario' }
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.FILM,
    data: { title: 'name of the wild' }
};
console.log(docOne, docTwo);
