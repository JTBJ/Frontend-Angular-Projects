import { Coach } from "./coach";
import { CricketCoach } from "./cricketCoach"; // Import the CricketCoach class
import { GolfCoach } from "./golfCoach"; // Import the GolfCoach class

let myCricketCoach = new CricketCoach(); // Create an instance of CricketCoach
let myGolfCoach = new GolfCoach(); // Create an instance of GolfCoach

let theCoaches: Coach[] = []; // Create an array of Coaches

theCoaches.push(myCricketCoach); // Add the CricketCoach instance to the array
theCoaches.push(myGolfCoach); // Add the GolfCoach instance to the array

for (let tempCoach of theCoaches) {
  console.log(tempCoach.getDailyWorkout());
}
