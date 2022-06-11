// Interfaces
interface IsPerson {
    name: string;
    age: number;

    speak(a: string): void;

    spend(a: number): number
}

const me: IsPerson = {
    name: 'marko',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`);
        return amount;
    }
};

const greePerson = (person: IsPerson) => {
    console.log(`hello`, person.name);
}

greePerson(me)

import {Invoice} from "./classes/invoice.js";

const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 350);

let invoices: Invoice[] = [];

invoices.push(invOne, invTwo);

console.log(invoices)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})