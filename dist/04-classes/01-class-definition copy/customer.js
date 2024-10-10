"use strict";
var Customer1 = /** @class */ (function () {
    function Customer1(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer1;
}());
// Create an instance of the class
var myCustomer1 = new Customer1("Martin", "Dixon");
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
