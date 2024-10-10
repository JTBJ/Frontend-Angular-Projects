"use strict";
var sportsOnev2 = ["Golf", "Cricket", "Tennis", "Swimming"];
// Let's use the for loop to iterate over the array
for (var i = 0; i < sportsOnev2.length; i++) {
    console.log(sportsOnev2[i]);
}
// Let's use the for..of loop to iterate over the array with a condition
for (var _i = 0, sportsOnev2_1 = sportsOnev2; _i < sportsOnev2_1.length; _i++) {
    var tempSport = sportsOnev2_1[_i];
    if (tempSport === "Cricket") {
        console.log(tempSport + " is my favorite sport!");
    }
    else {
        console.log(tempSport);
    }
}
