const me = {
    name: 'marko',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
const greePerson = (person) => {
    console.log(`hello`, person.name);
};
greePerson(me);
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 350);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
