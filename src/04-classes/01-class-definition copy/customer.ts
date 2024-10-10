class Customer1 {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// Create an instance of the class
let myCustomer1 = new Customer1("Martin", "Dixon");

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
