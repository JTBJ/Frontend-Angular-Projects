class Customerv3 {
  private firstName: string;
  private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }

  // create setter and getter methods
  public set setFirstName(theFirst: string) {
    this.firstName = theFirst;
  }

  public get getFirstName(): string {
    return this.firstName;
  }

  public set setLastName(theLast: string) {
    this.lastName = theLast;
  }

  public get getLastName(): string {
    return this.lastName;
  }
}

// Create an instance of the class
let myCustomerv3 = new Customerv3("Martin", "Dixon");

console.log(myCustomerv3.getFirstName);
console.log(myCustomerv3.getLastName);
