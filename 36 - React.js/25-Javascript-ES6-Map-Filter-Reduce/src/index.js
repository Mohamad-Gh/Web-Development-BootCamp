// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// newNumbers = numbers.map(function (num) {
//   return num * 10;
// });
// console.log(newNumbers);
// //Filter - Create a new array by keeping the items that return true.

// filterNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(filterNumbers);
// //Reduce - Accumulate a value by doing something to each item in an array.

// reducNumber = numbers.reduce(function (acc, num) {
//   return acc + num;
// });
// console.log(reducNumber);

// //Find - find the first item that matches from an array.

// findNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(findNumber);

// //FindIndex - find the index of the first item that matches.

// indexNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(indexNumber);

import emojipedia from "./emojipedia";

const index = 100;

let newArray = [];
newArray = emojipedia.map(function (element) {
  return element.meaning.slice(0, index);
});
console.log(newArray);
