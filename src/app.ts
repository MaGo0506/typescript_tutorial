import {Invoice} from "./classes/invoice.js";

const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 350);

let invoices: Invoice[] = [];

invoices.push(invOne, invTwo);

console.log(invoices)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})