let sportsOnev2: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// Let's use the for loop to iterate over the array
for (let i = 0; i < sportsOnev2.length; i++) {
  console.log(sportsOnev2[i]);
}

// Let's use the for..of loop to iterate over the array with a condition
for (let tempSport of sportsOnev2) {
  if (tempSport === "Cricket") {
    console.log(`${tempSport} is my favorite sport!`);
  } else {
    console.log(tempSport);
  }
}
