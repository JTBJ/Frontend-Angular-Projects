"use strict";
var Customerv2f = /** @class */ (function () {
    function Customerv2f(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Object.defineProperty(Customerv2f.prototype, "setFirstName", {
        // create setter and getter methods
        set: function (theFirst) {
            this.firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerv2f.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerv2f.prototype, "setLastName", {
        set: function (theLast) {
            this.lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerv2f.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customerv2f;
}());
// Create an instance of the class
var myCustomerv2f = new Customerv2f("Martin", "Dixon");
console.log(myCustomerv2f.getFirstName);
console.log(myCustomerv2f.getLastName);
