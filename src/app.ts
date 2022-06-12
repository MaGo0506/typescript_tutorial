import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import {ListTemplate} from "./classes/ListTemplate.js";

let docOne: HasFormatter,
    docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
//
// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
//
// console.log(docs)
//
// const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
// const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 350);
//
// let invoices: Invoice[] = [];
//
// invoices.push(invOne, invTwo);
//
//
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement,
    toFrom = document.querySelector('#tofrom') as HTMLInputElement,
    details = document.querySelector('#details') as HTMLInputElement,
    amount = document.querySelector('#amount') as HTMLInputElement

// list template instane
const ul = document.querySelector('.item-list') as HTMLUListElement,
    list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, 'end')
})