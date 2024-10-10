"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterProperties = void 0;
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(ParameterProperties.prototype, "setFirstName", {
        // create setter and getter methods
        set: function (theFirst) {
            this.firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "setLastName", {
        set: function (theLast) {
            this.lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
exports.ParameterProperties = ParameterProperties;
