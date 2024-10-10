"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cricketCoach_1 = require("./cricketCoach"); // Import the CricketCoach class
var golfCoach_1 = require("./golfCoach"); // Import the GolfCoach class
var myCricketCoach = new cricketCoach_1.CricketCoach(); // Create an instance of CricketCoach
var myGolfCoach = new golfCoach_1.GolfCoach(); // Create an instance of GolfCoach
var theCoaches = []; // Create an array of Coaches
theCoaches.push(myCricketCoach); // Add the CricketCoach instance to the array
theCoaches.push(myGolfCoach); // Add the GolfCoach instance to the array
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
