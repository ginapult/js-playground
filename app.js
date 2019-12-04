'use strict';

console.log('yup, g! good to go on js!');

// while loop
var timeToLiftOff = 10;

while (timeToLiftOff > 0) {
  console.log(timeToLiftOff);
  timeToLiftOff = timeToLiftOff - 1;
};
console.log('We have LIFTOFF!');

// for loop
var fruits = ['apple', 'banana', 'cantaloupe', 'dragonfruit'];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};

// nested for loop
// ten times do the inner loop
for (var numberOfTimes = 0; numberOfTimes < 10; numberOfTimes ++) {
  // loop through all the fruits in the array and print them out
  for (var i = 0; i < fruits.length; i++) {
    console.log(numberOfTimes, fruits[i]);
  };
};