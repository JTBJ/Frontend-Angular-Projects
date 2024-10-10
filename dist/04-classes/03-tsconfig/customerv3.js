"use strict";
var Customerv3 = /** @class */ (function () {
    function Customerv3(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Object.defineProperty(Customerv3.prototype, "setFirstName", {
        // create setter and getter methods
        set: function (theFirst) {
            this.firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerv3.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerv3.prototype, "setLastName", {
        set: function (theLast) {
            this.lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerv3.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customerv3;
}());
// Create an instance of the class
var myCustomerv3 = new Customerv3("Martin", "Dixon");
console.log(myCustomerv3.getFirstName);
console.log(myCustomerv3.getLastName);
