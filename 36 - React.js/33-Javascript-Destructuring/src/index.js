// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
// import cars from "./practice";

const [cat, dog] = animals;
console.log(cat.name, "and", cat.sound);
// providing alternative name
// const { name: catName, sound: catSound } = cat;
// console.log(catName, "and", catSound);
const {
  catname,
  catsound,
  catfeedingRequirements: { catFood, catWater },
} = cat;

const {
  dogname,
  dogsound,
  dogfeedingRequirements: { dogFood = 4, dogWater = 5 },
} = dog;

console.log(catFood);
// const [honda, tesla] = cars;
// console.log(tesla);
// const teslaTopSpeed = tesla.speedStats.topSpeed;
// const teslaTopColour = tesla.coloursByPopularity[0];
// const hondaTopSpeed = honda.speedStats.topSpeed;
// const hondaTopColour = honda.coloursByPopularity[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
