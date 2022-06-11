// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
//
// age = 40;
// character = 'mario';
// isLoggedIn = true;
//
// // arrays
// let ninjas: string[] = [];
//
// ninjas.push('yoshi')
//
// let nums: number[] = [];
//
// nums.push(23);
//
// console.log(ninjas, nums)
//
// // union types
// let mixed: (string|number)[] = [];
//
// mixed.push('hello', 23)
//
// console.log(mixed)
//
// let uid: string|number;
//
// // Object
//
// let ninjaOne: object;
// ninjaOne  = {name: 'yoshi', age: 30};
//
// console.log('ninjaOne', ninjaOne)
//
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }
//
// ninjaTwo = {name: 'mario', age: 20, beltColour: 'black'};

/* Dynamic any type */

// let age: any = 25;
//
// age = 'two';
//
// console.log(age)
//
// age = {name: 'luigi'}
//
// console.log(age)
//
// let mixed: any[] = [];
//
// mixed.push(25);
// mixed.push('mario');
// mixed.push(true);
//
// console.log(mixed)
//
// let ninja: {
//     name: any
// }
//
// ninja = {
//     name: 25
// }
//
// console.log(ninja)

// /* Functions basics */
// let greet: Function;
//
// greet = () => {
//     console.log('hello, again')
// }
//
// greet()
//
// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b);
//     console.log(c)
// }
//
// add(5, 10)
//
// const minus = (a: number, b: number) => {
//     return a + b;
// }
//
// let result = minus(10, 7);
//
// // result = 'string';

/* Type Aliases */

// type StringOrNum = string | number;
// type ObjWithName = {name: string, uid: StringOrNum};
//
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
//
// const greet = (user: ObjWithName) => {
//     console.log(`${user.name} says hello`)
// }

/* Function Signatures */
//
// // let greet: Function;
//
// // example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
//
// greet('mario', 'hello')
//
// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add') {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
//
// console.log(calc(10, 15, 'add'));
//
// // example 3
// type objWithNameAndAge = {name: string, age: number | string}
// let logDetails: (obj: objWithNameAndAge) => void;
//
// logDetails = (ninja: objWithNameAndAge) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
//
// let ninja = {
//     name: 'mario',
//     age: 25
// }
//
// logDetails(ninja);