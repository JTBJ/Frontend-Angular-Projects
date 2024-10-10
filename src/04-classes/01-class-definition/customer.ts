class Customerf {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// Create an instance of the class
let myCustomerf = new Customerf("Martin", "Dixon");

console.log(myCustomerf.firstName);
console.log(myCustomerf.lastName);
