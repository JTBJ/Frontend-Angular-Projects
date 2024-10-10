"use strict";
var Customerf = /** @class */ (function () {
    function Customerf(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customerf;
}());
// Create an instance of the class
var myCustomerf = new Customerf("Martin", "Dixon");
console.log(myCustomerf.firstName);
console.log(myCustomerf.lastName);
