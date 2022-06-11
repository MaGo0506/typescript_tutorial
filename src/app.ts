// Classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'Work on the Luigi website', 350);

let invoices: Invoice[] = [];

invoices.push(invOne, invTwo);

console.log(invoices)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

// console.log(invOne.format());
// console.log(invTwo.format());
//
// console.log(invOne)
// console.log(invTwo)

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement,
     toFrom = document.querySelector('#tofrom') as HTMLInputElement,
     details = document.querySelector('#details') as HTMLInputElement,
     amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})

