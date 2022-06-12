import {HasFormatter} from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li'),
            h4 = document.createElement('h4'),
            p = document.createElement('p');

        h4.innerText = heading;
        p.innerText = item.format();

        li.append(h4);
        li.append(p)

        pos === 'start' ? this.container.prepend(li) : this.container.append(li)
    }
}

// GENERICS

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

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
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
//
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T
// }
//
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.DIRECTOR,
//     data: {name: 'mario'}
// }
//
// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.FILM,
//     data: {title: 'name of the wild'}
// }
//
// console.log(docOne, docTwo)

// Tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'Yoshi';
arr = [30, false, 'yoshi']

let tup: [string, number, boolean] = ['ryu', 25, true]
tup[0] = 'ken';
tup[1] = 30