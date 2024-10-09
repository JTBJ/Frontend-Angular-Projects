var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
// Let's use the for loop to iterate over the array
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// Let's use the for..of loop to iterate over the array
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport === "Cricket") {
        console.log(tempSport + " is my favorite sport!");
    }
    else {
        console.log(tempSport);
    }
}
