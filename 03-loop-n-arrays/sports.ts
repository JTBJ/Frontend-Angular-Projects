let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// Let's use the for loop to iterate over the array
for (let i = 0; i < sportsOne.length; i++) {
  console.log(sportsOne[i]);
}

// Let's use the for..of loop to iterate over the array with a condition
for (let tempSport of sportsOne) {
  if (tempSport === "Cricket") {
    console.log(`${tempSport} is my favorite sport!`);
  } else {
    console.log(tempSport);
  }
}
