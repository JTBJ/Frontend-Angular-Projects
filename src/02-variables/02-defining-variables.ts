let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar";
let myData: any = 50.0; // any type

console.log(found);
console.log("The grade is " + grade); // string concatenation
console.log("Hi " + firstName + " " + lastName); // string interpolation
console.log(`Hi ${firstName} ${lastName}`); // string interpolation
console.log(`Hi ${firstName} ${lastName} ${myData}`); // string interpolation
console.log(`Hi ${firstName} ${lastName} ${myData} ${found}`); // string interpolation
