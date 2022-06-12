import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docOne, docTwo;
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
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type'), toFrom = document.querySelector('#tofrom'), details = document.querySelector('#details'), amount = document.querySelector('#amount');
// list template instane
const ul = document.querySelector('.item-list'), list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
